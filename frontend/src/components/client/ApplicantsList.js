import React from 'react'
import { connect } from 'react-redux'
import Applicant from './Applicant'



const ApplicantsList = ({selectedJob}) => {
  return (
    <div className='ApplicantsList'>
      {selectedJob.job_profiles.map(applicant => (
        <Applicant key={applicant.id} applicant={applicant} />
      ))}
    </div>
  )
}



function mapStateToProps(state) {
  return {
    selectedJob: state.selectedJob
  }
}

export default connect(mapStateToProps)(ApplicantsList)
