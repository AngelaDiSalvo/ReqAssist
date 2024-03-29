import React from 'react'
import { connect } from 'react-redux'

import engineer from '../pics/engineer.svg'
import Adapter from '../Adapter'
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import NativeSelect from '@material-ui/core/NativeSelect';

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
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const Signup = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={props.classes.layout}>
        <Paper className={props.classes.paper}>
          <img src={engineer} className="App-Logo" />
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={props.classes.form} onSubmit={e => props.submitCredentials(e)}>
            <FormControl margin="normal" required fullWidth>
              <NativeSelect
                className={props.classes.selectEmpty}
                name="user_type"
              >
                <option>applicant</option>
                <option>employer</option>
              </NativeSelect>
            </FormControl>
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
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Re-Type Password</InputLabel>
              <Input
                name="password2"
                type="password"
                id="password2"
              />
            </FormControl>
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={props.classes.submit}
            >
              Sign Me Up
            </StyledButton>
          </form>
        </Paper>
      </main>
    </React.Fragment>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    submitCredentials: (e) => {
      e.preventDefault()
      if (e.target[2].value === e.target[3].value) {
        const payload = {
          user_type: e.target[0].value,
          email: e.target[1].value,
          password: e.target[2].value
        }
        dispatch({ type: 'SUBMIT_CREDENTIALS', payload})
      } else {
        alert("Error: password must match");
      }
      window.history.pushState({}, "", "/")
    }
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect(null, mapDispatchToProps)(withStyles(styles)(Signup))
