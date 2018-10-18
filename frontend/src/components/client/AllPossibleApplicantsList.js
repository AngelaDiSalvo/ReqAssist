import React from 'react'
import { connect } from 'react-redux'
import Adapter from '../../Adapter'

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

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class AllPossibleApplicantsList extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3001/job_profiles')
    .then(r => r.json())
    .then(this.props.storeApplicants)
  }

  render() {
    if (this.props.isLoaded) {
      return (
        <Paper className={this.props.classes.root}>
          <Table className={this.props.classes.table}>
            <TableHead>
              <TableRow>
                All Applicants
              </TableRow>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>name</TableCell>
                <TableCell>score</TableCell>
                <TableCell>home zip</TableCell>
                <TableCell>travel distance</TableCell>
                <TableCell>position type</TableCell>
                <TableCell>experience</TableCell>
                <TableCell>requested rate per hour</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.all_applicants.map(app => {
                return(
                <TableRow key={app.id}>
                  <TableCell component="th" scope="row">{app.id}</TableCell>
                  <TableCell>{app.name}</TableCell>
                  <TableCell>{app.score}</TableCell>
                  <TableCell>{app.home_zip}</TableCell>
                  <TableCell>{app.travel_radius}</TableCell>
                  <TableCell>{app.position_type.map(type => <div>{type}</div>)}</TableCell>
                  <TableCell>{app.experience}</TableCell>
                  <TableCell>{app.min_wage_rate}</TableCell>
                </TableRow>)})}
            </TableBody>
          </Table>
        </Paper>

      )
    } else {
      return <div>Loading...</div>
    }
  }

}

function mapStateToProps(state) {
  return {
    all_applicants: state.all_applicants,
    isLoaded: state.isLoaded
  }
}

function mapDispatchToProps(dispatch) {
  return {
    storeApplicants: (app) => dispatch({ type: 'STORE_ALL_APPLICANTS', payload: app} )
  }
}

AllPossibleApplicantsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AllPossibleApplicantsList))
