import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import JobsContainer from './components/JobsContainer'
import { connect } from 'react-redux'

class App extends Component {

  signUpRedirect = e => {
    this.setState({
      toggleSignUp: true
    })
  }

  loginRedirect = e => {
    this.setState({
      toggleLogin:!this.state.toggleLogin
    })
  }

  submitCredentials = e => {
    e.preventDefault()
    console.log(e)
    Adapter.createNewUser({
      email: e.target[0].value,
      password: e.target[1].value
    })
  }


  render() {
    // return (
    //   <div className="App">
    //     <Navbar />
    //
    //     <JobsContainer />
    //   </div>

    if (this.props.isLoggedIn) {
      return (
        <div className="App">
          <header className="App-header">
            <Navbar />
          </header>
          <p className="App-intro">
            <JobsContainer />
          </p>
        </div>
      )
    }

    return (
      <div>
        <Homepage
          signUpRedirect={this.props.signUpRedirect}
          toggleSignUp={this.state.toggleSignUp}
          loginRedirect={this.props.loginRedirect}
          toggleLogin={this.state.toggleLogin}
          submitCredentials={this.props.submitCredentials}
          username={this.state.username}
          password={this.state.password}
          email={this.state.email}
          zipCode={this.state.zipCode}
          handleLogin={this.handleLogin}
        />
      </div>
    )


  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn,
    toggleSignUp: state.toggleSignUp,
    toggleLogin: state.toggleLogin,
    isLoaded: state.isLoaded,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signUpRedirect: (e) => dispatch({ type: 'FETCH_JOBS'} )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
