import React from 'react'
import { connect } from 'react-redux'

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 100,
    maxHeight: 100,
  },
});

const JobList = (props) => {
  props.jobs.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))

  return (
    <Paper className={props.classes.root}>
      <Table className={props.classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>All Jobs</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Job Id</TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>Position Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.jobs.map(job => {
            return (
              <TableRow hover key={job.id} onClick={() => props.selectJob(job)}>
                <TableCell component="th" scope="row">{job.id}</TableCell>
                <TableCell>{job.company_name}</TableCell>
                <TableCell>{job.position}</TableCell>
              </TableRow>)})}
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
    selectJob: (job) => dispatch({type: "SELECT_JOB", payload: job})
  }
}

JobList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(JobList))
