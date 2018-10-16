import React from 'react'
import { connect } from 'react-redux'
import Job from './Job'



const JobList = ({jobs}) => {
  return (
    <div className='JobList'>
      {jobs.map(job => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  )
}



function mapStateToProps(state) {
  return {
    jobs: state.jobs,
    selectedJob: state.selectedJob
  }
}

export default connect(mapStateToProps)(JobList)
