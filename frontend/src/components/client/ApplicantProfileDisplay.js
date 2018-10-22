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

import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const styles = theme => ({
  card: {
    maxWidth: 700,
    minWidth: 700,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
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
    width: 200
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
});

class ApplicantProfileDisplay extends React.Component{
  state = {
    expanded: false,
    selectedCandidate: null,
    score: 0
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  showForm = () => {
    console.log('hi');
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const app = this.props.selectedApplicant
    const jobId = this.props.selectedJob.id
    const appId = app.id
    let width = window.screen.availWidth;
    return (
      <div>
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
              admin comments: {app.comments}
            </Typography>
          </CardContent>
          <CardActions className={this.props.classes.actions} disableActionSpacing>
            <IconButton aria-label="Edit">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={() => this.showForm(appId)}><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none" /></svg>
            </IconButton>
            <IconButton aria-label="Delete">
              <DeleteIcon onClick={() => this.props.deleteJobApps([jobId, appId])}/>
            </IconButton>
            <IconButton
              className={classnames(this.props.classes.expand, {
                [this.props.classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <form className={this.props.classes.container} noValidate autoComplete="off" onSubmit={e => this.props.clientEditJobProfile(e, app.id, this.props.selectedJob.id)}>
                <TextField
                  id="filled-multiline-static"
                  label="Comments"
                  multiline
                  rows="4"
                  defaultValue={app.comments}
                  className={this.props.classes.textField}
                  margin="normal"
                  variant="filled"
                />
                <TextField
                  id="filled-number"
                  label="Score"
                  value={app.score}
                  onChange={this.handleChange("score")}
                  type="number"
                  className={this.props.classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                  variant="filled"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={this.props.classes.submit}
                >
                  Submit Change
                </Button>
              </form>
            </CardContent>
          </Collapse>
        </Card>
      </div>
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
    // // (appId) => {
    //   dispatch( {type: 'CLIENT_EDIT_JOB_PROFILE', payload: (appId)} )},
  }
}

ApplicantProfileDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ApplicantProfileDisplay))
