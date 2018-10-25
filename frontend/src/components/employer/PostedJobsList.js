import React from 'react'
import { connect } from 'react-redux'

import classNames from 'classnames';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginBottom: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    // minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PostedJobsList = (props) => {
  const bull = <span className={props.classes.bullet}>•</span>;

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={props.classes.layout}>
        <Paper className={props.classes.paper}>
          <Typography component="h1" variant="h5">
            Posted Jobs
          </Typography>
          <br/>
          <Grid container spacing={24}>
            {props.postedJobs.map(job => {
              return (
                <Grid item xs={4}>
                  <Card className={props.classes.card}>
                    <CardContent>
                      <Typography className={props.classes.title} color="textSecondary" gutterBottom>
                        {job.company_name}
                        <br />
                        {job.phone}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {job.position}
                      </Typography>
                      <Typography className={props.classes.pos} color="textSecondary">
                        status: {job.job_status.status}
                        <br />
                        submit date: {job.created_at.slice(0,10)}
                        <br />
                        job zip: {job.job_zip}
                      </Typography>
                      <Typography component="p">
                        description: <strong>{job.position_description}</strong>
                        <br />
                        <br />
                        requirements: <strong>{job.requirements}</strong>
                        <br />
                        <br />
                        comments: <strong>{job.comments}</strong>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {/* <Button size="small">Edit</Button> */}
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
          </Grid>

        </Paper>
      </main>
    </React.Fragment>

  )
}

function mapStateToProps(state) {
  return {
    postedJobs: state.postedJobs,
  }
}

PostedJobsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(PostedJobsList));
