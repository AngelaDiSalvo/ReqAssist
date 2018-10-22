import React from 'react'
import { connect } from 'react-redux'
import EmployerJobForm from './EmployerJobForm'
import PostedJobsList from './PostedJobsList'

class EmployerContainer extends React.Component{
  state = {
    showEmployerJobForm: false
  }

  componentDidMount(){
    this.fetchJobs(this.props.user.id);
  }

  fetchJobs = (id) => {
    fetch(`http://localhost:3001/users/${id}`, {headers: {Authorization: `Bearer ${localStorage.token}`}})
      .then(r => r.json())
      .then(this.props.storePostedJobs)
  }

  toggleJobForm = (e) => {
    e.preventDefault()
    let showForm = !this.state.showEmployerJobForm
    let form;
    this.setState({showEmployerJobForm: showForm})
  }

  render() {
    if (this.props.isLoaded) {
      return (
        <div className='EmployerContainer'>
          <br></br>
          {this.props.postedJobs ?
            <p>Your list of posted jobs:<PostedJobsList /></p> : <p>You currently have no posted jobs</p>}
          <button className='button' onClick={this.toggleJobForm}>Submit a new job</button>
          {this.state.showEmployerJobForm ? <EmployerJobForm /> : null}
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoaded: state.isLoaded,
    user: state.user,
    postedJobs: state.postedJobs,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    storePostedJobs: (user) => dispatch({ type: 'STORE_POSTED_JOBS', payload: user} )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployerContainer)
