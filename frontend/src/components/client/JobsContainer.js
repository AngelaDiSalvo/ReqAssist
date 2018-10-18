import React from 'react'
import JobList from './JobList'
import JobDisplay from './JobDisplay'
import AllPossibleApplicantsList from './AllPossibleApplicantsList'

import { connect } from 'react-redux'

class JobsContainer extends React.Component {

  componentDidMount(){
    this.props.fetchJobs();
  }

  render() {
    return (
      <div className='container'>
        <div>
        <JobList /></div>
        {this.props.selectedJob ? <div className='container2'><JobDisplay /></div> : <div>Selected Job</div>}

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
