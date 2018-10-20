import React from 'react'
import JobList from './JobList'
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
      <div>
      <div className='container'>
        <div >
          <JobList />
        </div>
        {this.props.selectedJob ?
          <div className='container'><JobDisplay/></div> :
          <div>Selected Job</div>}
      </div>
      {this.props.selectedJob && this.props.selectedApplicant ?
        <div className='container3'>
          <ApplicantProfileDisplay/>
        </div> :
        <div>Selected Applicant</div>}
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
