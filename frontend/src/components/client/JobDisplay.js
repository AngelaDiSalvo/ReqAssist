import React from 'react'
import { connect } from 'react-redux'

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
    background: '#ddfff7'
  },
  table: {
    minWidth: 300,
  },
  tablecell: {
    fontSize: '12pt',
  },
});

const JobDisplay = (props) => {
  console.log(props.selectedJob);
  return (
    <Paper className={props.classes.root}>
      <Table className={props.classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Job Details</TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={props.classes.tablecell}>Job Id: {props.selectedJob.id}</TableCell>
            <TableCell className={props.classes.tablecell}>Company Name: <strong>{props.selectedJob.company_name}</strong></TableCell>
            <TableCell className={props.classes.tablecell}>Position: <strong>{props.selectedJob.position}</strong></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={props.classes.tablecell}>Status: {props.selectedJob.job_status.status}</TableCell>
            <TableCell className={props.classes.tablecell}>Email: {props.selectedJob.user.email}</TableCell>
            <TableCell className={props.classes.tablecell}>Phone: {props.selectedJob.phone}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table className={props.classes.table}>
        <TableBody>
          <TableRow>
            <TableCell className={props.classes.tablecell}>Position Description: <strong>{props.selectedJob.position_description}</strong></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={props.classes.tablecell}>Requirements: <strong>{props.selectedJob.requirements}</strong></TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table className={props.classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={props.classes.tablecell}>Selected Candidates</TableCell>
            <TableCell className={props.classes.tablecell}> </TableCell>
            <TableCell className={props.classes.tablecell}> </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={props.classes.tablecell}>Applicant Id</TableCell>
            <TableCell className={props.classes.tablecell}>Name</TableCell>
            <TableCell className={props.classes.tablecell}>Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.selectedJob.job_profiles.map(applicant => {
            return (
              <TableRow hover key={applicant.id} onClick={() => props.selectApplicant(applicant)}>
                <TableCell className={props.classes.tablecell}>{applicant.id}</TableCell>
                <TableCell className={props.classes.tablecell}>{applicant.name}</TableCell>
                <TableCell className={props.classes.tablecell}>{applicant.score}</TableCell>
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
