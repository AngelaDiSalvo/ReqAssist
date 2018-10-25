import React from 'react'
import Signup from "./Signup"
// import Login from "./Login"
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

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';

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
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: '#79bcb8',
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const Homepage = (props) => {
  if (props.toggleSignUp === false) {
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={props.classes.layout}>
          <Paper className={props.classes.paper}>
              <img src={engineer} className="App-Logo" />
            <Typography component="h1" variant="h5">
              Welcome to ReqAssist
            </Typography>
            <form className={props.classes.form} onSubmit={e => props.handleLogin(e)}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </FormControl>
              <StyledButton
                type="submit"
                fullWidth
                variant="contained"
                className={props.classes.submit}
              >
                Sign In
              </StyledButton>
              <StyledButton
                type="submit"
                fullWidth
                variant="contained"
                className={props.classes.submit}
                onClick={e => props.signUpRedirect(e)}
              >
                Sign Up
              </StyledButton>
            </form>
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
    }

}

function handleLogin(e, dispatch) {
  e.preventDefault()
  let email = e.target[0].value
  let password = e.target[1].value

  fetch('http://localhost:3001/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: {
        email,
        password
      }
    })
  })
  .then(resp => resp.json())
  .then(data_with_token => {
    if (!!data_with_token.jwt) {
      localStorage.token = data_with_token.jwt;
      dispatch({type: "SET_USER", payload: data_with_token.user})
    } else {
      localStorage.token = "undefined"
    }
  })

}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn,
    toggleSignUp: state.toggleSignUp,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleLogin: (e) => (handleLogin(e, dispatch)),
    signUpRedirect: (e) => dispatch({ type: 'SIGNUP_REDIRECT'} )
  }
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Homepage));
