import React from 'react'
import { connect } from 'react-redux'
import EmployerJobForm from './EmployerJobForm'
import PostedJobsList from './PostedJobsList'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  layout: {
    width: 'auto',
    // display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
})

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(to left, #9dd9d2, #79bcb8, #508991, #2ca6a4)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
})(Button);

class EmployerContainer extends React.Component{
  state = {
    showEmployerJobForm: false
  }

  componentDidMount(){
    this.fetchJobs(this.props.user.id);
  }

  fetchJobs = (id) => {
    fetch(`http://localhost:3001/users/${id}`, {headers: {Authorization: `Bearer ${localStorage.token}`}})
      .then(r => r.json())
      .then(this.props.storePostedJobs)
  }

  toggleJobForm = (e) => {
    e.preventDefault()
    let showForm = !this.state.showEmployerJobForm
    this.setState({showEmployerJobForm: showForm})
  }

  render() {
    if (this.props.isLoaded) {
      return (
        <div className='EmployerContainer'>
          <main className={this.props.classes.layout}>
            <StyledButton className={this.props.classes.submit} onClick={this.toggleJobForm}>Submit new job</StyledButton>
            {this.state.showEmployerJobForm ? <EmployerJobForm /> : null}
          </main>
          <br></br>
          {this.props.postedJobs ?
            <PostedJobsList /> : <p>You currently have no posted jobs</p>}
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoaded: state.isLoaded,
    user: state.user,
    postedJobs: state.postedJobs,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    storePostedJobs: (user) => dispatch({ type: 'STORE_POSTED_JOBS', payload: user} )
  }
}

EmployerContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EmployerContainer))
