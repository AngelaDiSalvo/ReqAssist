import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import JobsContainer from './components/client/JobsContainer'
import Homepage from './components/Homepage'

import ApplicantContainer from './components/applicant_views/ApplicantContainer'

import { connect } from 'react-redux'

class App extends Component {
  render() {
    if (this.props.isLoggedIn && this.props.user.user_type === "client") {
      return (
        <div className="App">
          <Navbar />
          <div className="App-intro">
            <JobsContainer />
          </div>
        </div>
      )
    }

    if (this.props.isLoggedIn && this.props.user.user_type === "employer") {
      return (
        <div className="App">
          <Navbar />
          <div className="App-intro">
            <JobsContainer />
          </div>
        </div>
      )
    }

    if (this.props.isLoggedIn && this.props.user.user_type === "applicant") {
      return (
        <div className="App">
          <Navbar />
          <div className="App-intro">
            <ApplicantContainer />
          </div>
        </div>
      )
    }

    return (
      <div>
        <Homepage />
      </div>
    )

  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
