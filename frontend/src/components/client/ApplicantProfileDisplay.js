import React from 'react'
import { connect } from 'react-redux'
import Adapter from '../../Adapter'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(to left, #9dd9d2, #79bcb8, #508991, #2ca6a4)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    // padding: '0 30px',
  }
})(Button);

const styles = theme => ({
  card: {
    maxWidth: 500,
    minWidth: 500,
    background: '#ddfff7'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    verticalAlign: 'middle',
    // width: 450,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
      [theme.breakpoints.up('sm')]: {
        marginRight: -8,
      },
  },
  menu: {
    width: 100
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class ApplicantProfileDisplay extends React.Component{
  state = {
    selectedCandidate: null,
    score: this.props.selectedApplicant.score
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const expanded = this.props.is_job_profile_expanded
    const app = this.props.selectedApplicant
    const jobId = this.props.selectedJob.id
    const appId = app.id
    let width = window.screen.availWidth;
    return (
      <Grid container spacing={12}>
        <Grid item xs={6}>
        </Grid>
        <Card className={this.props.classes.card} justify="center">
          <CardHeader
            title={app.name}
            subheader={`phone: ${app.phone}, SCORE: ${app.score}`}
          />
          <CardContent>
            <Typography component="p">
              position type(s): {app.position_type.map(item => `${item}, `)}<br />
              experience: {app.experience}yrs<br />
              hourly rate: ${app.min_wage_rate}<br />
              zip: {app.home_zip}<br />
              travel distance: {app.travel_radius}miles<br />
              profile date: {app.updated_at.slice(0,10)}<br />
              <strong>admin comments: {app.comments}</strong>
            </Typography>
          </CardContent>
          <CardActions className={this.props.classes.actions} disableActionSpacing>
            <IconButton aria-label="Delete">
              <DeleteIcon onClick={() => this.props.deleteJobApps([jobId, appId])}/>
            </IconButton>
            <IconButton
              className={classnames(this.props.classes.expand, {
                [this.props.classes.expandOpen]: expanded,
              })}
              onClick={this.props.handleExpandClick}
              aria-expanded={expanded}
              aria-label="Show more"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none" /></svg>
              <ExpandMoreIcon/>
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {/* <Grid item xs={3}> */}
                <form className={this.props.classes.container} noValidate autoComplete="off" onSubmit={e => this.props.clientEditJobProfile(e, app.id, this.props.selectedJob.id)}>
                  <TextField
                    id="filled-multiline-static"
                    label="Comments"
                    multiline
                    fullWidth
                    rows="4"
                    defaultValue={app.comments}
                    className={this.props.classes.textField}
                    margin="normal"
                    variant="filled"
                  />
                  <TextField
                    id="filled-number"
                    label="Score"
                    defaultValue={app.score}
                    onChange={this.handleChange("score")}
                    type="number"
                    className={this.props.classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="normal"
                    variant="filled"
                  />
                  <StyledButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={this.props.classes.submit}
                  >
                    Submit Change
                  </StyledButton>
                </form>
              {/* </Grid> */}
            </CardContent>
          </Collapse>
          </Card>
      </Grid>
    )
  }
}


function mapStateToProps(state) {
  return {
    jobs: state.jobs,
    selectedJob: state.selectedJob,
    selectedApplicant: state.selectedApplicant,
    applicantProfile: state.applicantProfile,
    postedJobs: state.postedJobs,
    all_applicants: state.all_applicants,
    is_job_profile_expanded: state.is_job_profile_expanded,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    deleteJobApps: ([jobId, appId]) => {
      dispatch( {type: 'FIND_THEN_DELETE_JOB_APP', payload: ([jobId, appId])} )},

    clientEditJobProfile: (e, id, jobId) => {
      e.preventDefault()
      let comments = e.target[0].value
      let score = e.target[1].value
      let url = `http://localhost:3001/jobs/${jobId}`
      Adapter.clientEditJobProfile([id, comments, score])
        .then(() => fetch(url, {headers: {"Authorization": `Bearer ${localStorage.token}`}}))
        .then(r => r.json())
        .then(job => (dispatch({type: "REPLACE_JOB", payload: job})))
    },

    handleExpandClick: () => dispatch( {type: 'TOGGLE_PROFILE_EXPAND'} )
  }
}

ApplicantProfileDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ApplicantProfileDisplay))
