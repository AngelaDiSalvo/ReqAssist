import React from 'react'
import { connect } from 'react-redux'

const PostedJob = (props) => {
  console.log(props.job);
  return (
    <div className='PostedJob'>
      <li onClick={() => props.selectJob(props.job)}>
        job submit date: {props.job.created_at}<br/>
        job status: {props.job.job_status.status}<br/>
        {props.job.company_name}:
        {props.job.position} <br/>
        {props.job.position_description}
        {props.job.job_zip}

      </li>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    selectJob: (job) => dispatch({type: "SELECT_JOB", payload: job})
  }
}

export default connect(null, mapDispatchToProps)(PostedJob)
