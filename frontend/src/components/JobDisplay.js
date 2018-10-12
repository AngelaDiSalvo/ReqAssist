import React from 'react'
import { connect } from 'react-redux'
import ApplicantsList from './ApplicantsList'


const JobDisplay = ({selectedJob}) => {
  console.log(selectedJob);
  return (
    <div className='JobDisplay'>
      <h5>Req Status: {selectedJob.job_status.status}</h5>
      <h5>Job Position: {selectedJob.position}</h5>
      <h5>Company: {selectedJob.employer.company_name}</h5>
      <h5>{selectedJob.employer.email}</h5>
      <h5>{selectedJob.employer.phone}</h5>

      <ul>Candidates:</ul>
      <ApplicantsList />

    </div>
  )
}

function mapStateToProps(state) {
  return {
    jobs: state.jobs,
    selectedJob: state.selectedJob
  }
}

export default connect(mapStateToProps)(JobDisplay)
