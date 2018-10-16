import React from 'react'
import JobList from './JobList'
import JobDisplay from './JobDisplay'
import { connect } from 'react-redux'


class JobsContainer extends React.Component {

  componentDidMount(){
    this.props.fetchJobs();
  }

  render() {
    return (
      <div className='container'>
        <JobList />
        {this.props.selectedJob ? <JobDisplay /> : <h3>Please select a job</h3>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    jobs: state.jobs,
    selectedJob: state.selectedJob
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchJobs: () => dispatch({ type: 'FETCH_JOBS'} )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsContainer)
