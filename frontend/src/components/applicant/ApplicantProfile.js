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

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  tablecell1: {
    fontSize: '12pt',
  },
  tablecell2: {
    fontSize: '16pt',
  },
  pos: {
    marginBottom: 12,
  },
});

const ApplicantProfile = (props) => {
  const profile = props.applicantProfile.job_profiles[0]
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={props.classes.layout}>
        <Paper className={props.classes.paper}>
          <Typography component="h2" variant="h5">
            Profile On File
          </Typography>
          <br/>
          <Grid container spacing={24}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8}>
              <Card className={props.classes.card}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className={props.classes.tablecell1}>name</TableCell>
                      <TableCell className={props.classes.tablecell2}>{profile.name}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell className={props.classes.tablecell1}>phone</TableCell>
                      <TableCell className={props.classes.tablecell2}>{profile.phone}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={props.classes.tablecell1}>zip</TableCell>
                      <TableCell className={props.classes.tablecell2}>{profile.home_zip}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={props.classes.tablecell1}>travel radius</TableCell>
                      <TableCell className={props.classes.tablecell2}>{profile.travel_radius}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={props.classes.tablecell1}>position type</TableCell>
                      <TableCell className={props.classes.tablecell2}>{profile.position_type.map( type => `${type}, `)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={props.classes.tablecell1}>minimum hourly rate ($/hr)</TableCell>
                      <TableCell className={props.classes.tablecell2}>{profile.min_wage_rate}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <CardActions>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
              <br/>
              <Typography className={props.classes.pos} color="textSecondary">
                We are currently working with employers to find you a good fit
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </main>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return {
    applicantProfile: state.applicantProfile
  }
}

ApplicantProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(ApplicantProfile));
