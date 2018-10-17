import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import {Route, Switch, NavLink, Redirect, withRouter} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/Navbar'
import JobsContainer from './components/client/JobsContainer'
import Homepage from './components/Homepage'

import ApplicantContainer from './components/applicant/ApplicantContainer'
import EmployerContainer from './components/employer/EmployerContainer'
import AllPossibleApplicantsList from './components/client/AllPossibleApplicantsList'


class App extends Component {

  componentDidMount() {
    const token = localStorage.token;
    fetch("http://localhost:3001/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (data) {
          this.props.setUser(data.user)
        }
      });
  }


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
            <EmployerContainer />
          </div>
        </div>
      )
    }

    if (this.props.isLoggedIn && this.props.user.user_type === "applicant") {
      return (
        <div className="App">
          <CssBaseline />
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

function mapDispathToProps(dispatch) {
  return {
    setUser: (data) => dispatch({type: "SET_USER", payload: data})
  }
}

export default connect(mapStateToProps, mapDispathToProps)(App);
