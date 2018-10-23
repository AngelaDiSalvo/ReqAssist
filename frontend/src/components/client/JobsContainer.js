import React from 'react'
// import JobList from './JobList'
import JobDisplay from './JobDisplay'
import ApplicantProfileDisplay from './ApplicantProfileDisplay'
import AllPossibleApplicantsList from './AllPossibleApplicantsList'

import { connect } from 'react-redux'

class JobsContainer extends React.Component {

  componentDidMount(){
    this.props.fetchJobs();
  }

  render() {
    return (
      <div className='container'>
        {this.props.selectedJob ?
            <JobDisplay/>
          : null}
        {this.props.selectedJob && this.props.selectedApplicant ?
          <ApplicantProfileDisplay/> : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    jobs: state.jobs,
    selectedJob: state.selectedJob,
    selectedApplicant: state.selectedApplicant,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchJobs: () => dispatch({ type: 'FETCH_JOBS'} )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsContainer)
