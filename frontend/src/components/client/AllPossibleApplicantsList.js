import React from 'react'
import { connect } from 'react-redux'
import Adapter from '../../Adapter'
import AllApplicant from './AllApplicant'


class AllPossibleApplicantsList extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3001/users')
    .then(r => r.json())
    .then(this.storeAllApplicants)
  }

  storeAllApplicants = (data) => {
    const onlyApplicants = data.users.filter(app => app.user_type === "applicant")
    this.props.storeApplicants(onlyApplicants)
  }

  render() {
    if (this.props.isLoaded) {
      return (
        <div className='AllPossibleApplicants'>
          {this.props.all_applicants.map(app => (<AllApplicant key={app.id} applicant={app} />))}
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }

}

function mapStateToProps(state) {
  return {
    all_applicants: state.all_applicants,
    isLoaded: state.isLoaded
  }
}

function mapDispatchToProps(dispatch) {
  return {
    storeApplicants: (app) => dispatch({ type: 'STORE_ALL_APPLICANTS', payload: app} )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllPossibleApplicantsList);
