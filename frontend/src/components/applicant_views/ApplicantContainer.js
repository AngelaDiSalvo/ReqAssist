import React from 'react'
import { connect } from 'react-redux'
import ApplicantForm from './ApplicantForm'
import ApplicantProfile from './ApplicantProfile'

class ApplicantContainer extends React.Component{

  componentDidMount(){
    this.props.fetchProfile(this.props.user.id);
  }

  render() {
    console.log(this.props);
    if (this.props.isLoaded) {
      if (this.props.applicantProfile.job_profiles[0] == null) {
        return (
          <div className='ApplicantContainer'>
            Welcome {this.props.user.email}
            <br></br>
            Please fill out your job profile to be contacted for future opportunities
            <ApplicantForm />

          </div>
        )
      } else {
        return (
          <div className='ApplicantContainer'>
            Welcome {this.props.applicantProfile.job_profiles[0].name}
            <br></br>
            Here's your profile on file
            <ApplicantProfile />
          </div>
        )
      }

    } else {
      return <div>Loading...</div>
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoaded: state.isLoaded,
    user: state.user,
    applicantProfile: state.applicantProfile,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProfile: (id) => dispatch({ type: 'FETCH_APPLICANT_PROFILE', payload: id} )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantContainer)
