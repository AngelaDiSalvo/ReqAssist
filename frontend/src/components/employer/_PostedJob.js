import React from 'react'
// import { connect } from 'react-redux'

const PostedJob = (props) => {
  return (
    <div className='PostedJob'>
      <li>
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

export default PostedJob
