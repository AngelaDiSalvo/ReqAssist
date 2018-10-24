import React from 'react'
import { connect } from 'react-redux'
import Adapter from '../../Adapter'

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import withStyles from '@material-ui/core/styles/withStyles';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import OutlinedInput from '@material-ui/core/OutlinedInput';

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
})


class EmployerJobForm extends React.Component {
  state = {
    type: null,
  };

  handleChange = event => {
    this.setState({ type: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault()

    Adapter.createNewJob({
      company_name: e.target[0].value,
      phone: e.target[1].value,
      job_zip: e.target[2].value,
      position: e.target[3].value,
      position_description: e.target[4].value,
      requirements: e.target[5].value,
      comments: e.target[6].value,
      // experience: e.target[7].value,
      // job_type: e.target[8].value,
      employer_id: this.props.user.id
    })

  }

  render() {
    const types = [
      'construction',
      'electrician',
      'HVAC',
      'tiling',
      'roofing',
      'plumbing',
      'manufacturing',
      'sanitation',
      'custodial',
      'mining',
      'warehousing',
      'commercial fishing',
      'oil field work',
      'waste disposal',
      'mechanic',
      'maintenance',
      'recycling'
    ];

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Job Form
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={24}>
            <Grid item xs={3}>
              <label>Company Name</label><input />
            </Grid>
            <Grid item xs={3}>
              <label>Phone</label><input />
            </Grid>
            <Grid item xs={3}>
              <label>Job Zip</label><input />
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="outlined" className={this.props.classes.formControl}>
                <label>
                  Position
                </label>
                <Select
                  value={this.state.type}
                  onChange={this.handleChange}
                >
                  {types.map(type => (
                    <MenuItem value={type}>{type}</MenuItem>
                  ))}
                </Select>
                {/* <label>Position Category</label> <select>
                  <option value="construction">construction</option>
                  <option value="electrician">electrician</option>
                  <option value="HVAC">HVAC</option>
                  <option value="tiling">tiling</option>
                  <option value="roofing">roofing</option>
                  <option value="plumbing">plumbing</option>
                  <option value="manufacturing">manufacturing</option>
                  <option value="sanitation">sanitation</option>
                  <option value="custodial">custodial</option>
                  <option value="mining">mining</option>
                  <option value="warehousing">warehousing</option>
                  <option value="commercial fishing">commercial fishing</option>
                  <option value="oil field work">oil field work</option>
                  <option value="waste disposal">waste disposal</option>
                  <option value="mechanic">mechanic</option>
                  <option value="maintenance">maintenance</option>
                  <option value="recycling">recycling</option>
                </select> <br /> */}
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <label>Position Description</label><input />
            </Grid>
            <Grid item xs={3}>
              <label>Requirements</label><input />
            </Grid>
            <Grid item xs={3}>
              <label>Comments</label><input />
            </Grid>
            {/* Experience Required: <select>
              <option value="0">new hire</option>
              <option value="1">experienced</option>
              <option value="2">very experienced</option>
              <option value="3">foreman</option>
            </select> <br /> */}
            <Grid item xs={3}>
              <StyledButton
                type="submit"
                variant="contained"
                color="primary"
                className={this.props.classes.submit}
              >
                Submit
              </StyledButton>
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

EmployerJobForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(EmployerJobForm));
