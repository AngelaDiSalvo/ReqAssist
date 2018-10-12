import React from 'react'
import { connect } from 'react-redux'

const Job = ({job, selectJob}) => {
  return (
    <div className='Job'>
      <li onClick={() => selectJob(job)}>{job.id}: {job.position}, {job.employer.company_name}</li>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    selectJob: (job) => dispatch({type: "SELECT_JOB", payload: job})
  }
}

export default connect(null, mapDispatchToProps)(Job)
