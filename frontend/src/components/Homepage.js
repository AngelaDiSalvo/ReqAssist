import React from 'react'
import Signup from "./Signup"
import Login from "./Login"
import { connect } from 'react-redux'
import {Route, Switch, NavLink, Redirect, withRouter} from 'react-router-dom';
import engineer from '../pics/engineer.svg'
import '../App.css';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(to left, #9dd9d2, #79bcb8, #508991, #2ca6a4)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px',
  }
})(Button);

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});


const Homepage = (props) => {
  if (props.toggleSignUp === false && props.toggleLogin === false) {
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={props.classes.layout}>
          <Paper className={props.classes.paper}>
              <img src={engineer} className="App-Logo" />
            <Typography component="h1" variant="h5">
              Welcome to ReqAssist
            </Typography>
              <StyledButton
                type="submit"
                fullWidth
                variant="contained"
                className={props.classes.submit}
                onClick={e => props.signUpRedirect(e)}
              >
                Sign Up
              </StyledButton>
              <StyledButton
                type="submit"
                fullWidth
                variant="contained"
                className={props.classes.submit}
                onClick={e => props.loginRedirect(e)}
              >
                Sign In
              </StyledButton>
          </Paper>
        </main>
      </React.Fragment>
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

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Homepage));
