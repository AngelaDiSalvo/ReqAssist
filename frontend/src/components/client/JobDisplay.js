import React from 'react'
import { connect } from 'react-redux'
// import ApplicantsList from './ApplicantsList'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 500,
  },
});

const JobDisplay = (props) => {
  return (
    <Paper className={props.classes.root}>
      <Table className={props.classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Job Details</TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Job Id:</TableCell>
            <TableCell>{props.selectedJob.id}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Status:</TableCell>
            <TableCell>{props.selectedJob.job_status.status}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email:</TableCell>
            <TableCell>{props.selectedJob.user.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Phone:</TableCell>
            <TableCell>{props.selectedJob.phone}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table className={props.classes.table2}>
        <TableHead>
          <TableRow>
            <TableCell>Selected Candidates</TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Applicant Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.selectedJob.job_profiles.map(applicant => {
            return (
              <TableRow key={applicant.id} onClick={() => props.selectApplicant(applicant)}>
                <TableCell>{applicant.id}</TableCell>
                <TableCell>{applicant.name}</TableCell>
                <TableCell>{applicant.score}</TableCell>
              </TableRow>
            )})}
        </TableBody>
      </Table>
    </Paper>
  )
}

function mapStateToProps(state) {
  return {
    jobs: state.jobs,
    selectedJob: state.selectedJob
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectApplicant: (app) => dispatch({ type: 'SELECT_APPLICANT', payload: app} )
  }
}

JobDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(JobDisplay))
