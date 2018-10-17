import React from 'react'
import Signup from "./Signup"
import Login from "./Login"
import '../css/homepage.css';
import { connect } from 'react-redux'
import {Route, Switch, NavLink, Redirect, withRouter} from 'react-router-dom';


const Homepage = (props) => {
  //have a button that redirects you to either the login or signup page
  if (props.toggleSignUp === false && props.toggleLogin === false) {
    return (
      <div id='login-box'>
        <div className="left">
          <h1>Welcome to Recruiter Assistant</h1>
          <button className='button' onClick={e => props.signUpRedirect(e)}>Sign up</button>
          <button className='button' onClick={e => props.loginRedirect(e)}>Login</button>
        </div>
      </div>
      )
    } else if (props.toggleSignUp === true) {
      return (
        <div>
          <Signup submitCredentials={props.submitCredentials}/>
        </div>
      )
    } else if (props.toggleLogin === true) {
      return (
        <div>
          <Login handleLogin={props.handleLogin}/>
        </div>
      )
    }
}


function mapStateToProps(state) { 
  return {
    isLoggedIn: state.isLoggedIn,
    toggleSignUp: state.toggleSignUp,
    toggleLogin: state.toggleLogin,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginRedirect: (e) => dispatch({ type: 'LOGIN_REDIRECT'} ),
    signUpRedirect: (e) => dispatch({ type: 'SIGNUP_REDIRECT'} )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
