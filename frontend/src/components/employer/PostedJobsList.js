import React from 'react'
import { connect } from 'react-redux'
import PostedJob from './PostedJob'


const PostedJobsList = (props) => {
  console.log(props);
  return (
    <div className='PostedJobsList'>
      {props.postedJobs.map(job => (
        <PostedJob key={job.id} job={job} />
      ))}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.user,
    postedJobs: state.postedJobs,
  }
}

export default connect(mapStateToProps)(PostedJobsList);
