import React from 'react'
import { connect } from 'react-redux'
import ApplicantsList from './ApplicantsList'

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
            Selected Job Details
          </TableRow>
          <TableRow>
            <TableCell>Job Id</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{props.selectedJob.id}</TableCell>
            <TableCell>{props.selectedJob.job_status.status}</TableCell>
            <TableCell>{props.selectedJob.user.email}</TableCell>
            <TableCell>{props.selectedJob.phone}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table className={props.classes.table2}>
        <TableHead>
          <TableRow>
            Current Candidates
          </TableRow>
          <TableRow>
            <TableCell>Applicant Id</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Applicant Id</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <ApplicantsList />
    </Paper>


  )
}

function mapStateToProps(state) {
  return {
    jobs: state.jobs,
    selectedJob: state.selectedJob
  }
}

JobDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(JobDisplay))
