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
    background: 'white',
    borderRadius: '3px',
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    background: 'white',
    margin: theme.spacing.unit,
    padding: '6px 6px 0px',
    borderRadius: '3px'
  }
})

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

function getStyles(types, that) {
  return {
    fontWeight:
      that.state.types.indexOf(types) === -1
        ? that.props.theme.typography.fontWeightRegular
        : that.props.theme.typography.fontWeightMedium,
    color: 'white',
  };
}

class ApplicantForm extends React.Component {
  state = {
    type: [],
    experience: null,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    Adapter.createNewJobProfile({
      user_id: this.props.user.id,
      name: e.target[0].value,
      phone: e.target[1].value,
      home_zip: e.target[2].value,
      travel_radius: e.target[3].value,
      experience: e.target[4].value,
      min_wage_rate: e.target[5].value,
      position_type: e.target[6].value.split(','),
    })
  }

  render() {
    return (
      <React.Fragment>
      <Grid container spacing={24}>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom>
            Profile Form
          </Typography>
        </Grid>
      </Grid>
      <form onSubmit={this.handleSubmit}>
      <Grid container spacing={24}>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={this.props.classes.textField}
            required
            id="name"
            name="name"
            label="name"
            fullWidth
            autoComplete="name"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={this.props.classes.textField}
            required
            id="phone"
            name="phone"
            label="phone"
            fullWidth
            autoComplete="phone"
          />
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={this.props.classes.textField}
            required
            id="zip"
            name="zip"
            label="zip / postal code"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="travel_radius"
            className={this.props.classes.textField}
            select
            fullWidth
            label="travel radius"
            SelectProps={{
              native: true,
            }}
            margin="normal"
          >
            <option key="5" value="10">10 miles</option>
            <option key="5" value="25">25 miles</option>
            <option key="5" value="50">50 miles</option>
          </TextField>
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={3}>

          <TextField
            className={this.props.classes.textField}
            id="experience"
            label="years of experience"
            onChange={this.handleChange("experience")}
            type="number"
            // InputLabelProps={{
            //   shrink: true
            // }}
            // margin="normal"
            // variant="filled"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField className={this.props.classes.textField} id="wage" name="wage" label="Requested Wage ($/hr)" fullWidth />
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth className={this.props.classes.formControl}>
          <InputLabel htmlFor="select-multiple-checkbox">Position Type</InputLabel>
          <Select
            multiple
            value={this.state.type}
            onChange={this.handleChange("type")}
            input={<Input id="select-multiple-checkbox" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {types.map(type => (
              <MenuItem key={type} value={type}>
                <Checkbox checked={this.state.type.indexOf(type) > -1} />
                <ListItemText primary={type} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </Grid>

        <Grid item xs={3}>
          <StyledButton
            type="submit"
            fullWidth
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

function mapDispatchToProps(dispatch) {
  return {
      saveProfile: (payload) => dispatch({ type: 'SET_APPLICANT_PROFILE', payload})
    }

}

ApplicantForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(ApplicantForm));
