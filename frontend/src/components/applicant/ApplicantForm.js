import React from 'react'
import { connect } from 'react-redux'
import Adapter from '../../Adapter'

class ApplicantForm extends React.Component {

  handleSubmit = (e) => {
    const position_types = []
    for (var i = 5; i < 22; i++) {
      if (e.target[i].checked) {
        position_types.push(e.target[i].value)
      }
    }

    Adapter.createNewJobProfile({
      user_id: this.props.user.id,
      name: e.target[0].value,
      phone: e.target[1].value,
      home_zip: e.target[2].value,
      travel_radius: e.target[3].value,
      experience: e.target[4].value,
      min_wage_rate: e.target[5].value,
      position_type: position_types,
    })

  }

  render() {
    return (
      <div className='ApplicantForm'>
        <form onSubmit={this.handleSubmit}>
          Name: <input /> <br />
          Phone: <input /> <br />
          Home Zip: <input /> <br />
          Travel Radius: <select>
            <option value="5">5 miles</option>
            <option value="10">10 miles</option>
            <option value="25">25 miles</option>
            <option value="50">50 miles</option>
          </select> <br />
          Years of Experience: <select>
            <option value="0">no experience</option>
            <option value="1">0-1 year</option>
            <option value="2">1-2 years</option>
            <option value="3">2-3 years</option>
          </select> <br />
          Minimum acceptable hourly wage: $<input /> <br />
          Job Type: (select all that apply) <div>
            <input id="1" type="checkbox" value="construction" /><label for="construction">construction</label>
            <input id="2" type="checkbox" value="electrician" /><label for="electrician">electrician</label>
            <input id="3" type="checkbox" value="HVAC" /><label for="HVAC">HVAC</label>
            <input id="4" type="checkbox" value="tiling" /><label for="tiling">tiling</label>
            <input id="5" type="checkbox" value="roofing" /><label for="roofing">roofing</label>
            <input id="6" type="checkbox" value="plumbing" /><label for="plumbing">plumbing</label>
            <input id="7" type="checkbox" value="manufacturing" /><label for="manufacturing">manufacturing</label>
            <input id="8" type="checkbox" value="sanitation" /><label for="sanitation">sanitation</label>
            <input id="9" type="checkbox" value="custodial" /><label for="custodial">custodial</label>
            <input id="10" type="checkbox" value="mining" /><label for="mining">mining</label>
            <input id="11" type="checkbox" value="warehousing" /><label for="warehousing">warehousing</label>
            <input id="12" type="checkbox" value="commercial fishing" /><label for="commercial fishing">commercial fishing</label>
            <input id="13" type="checkbox" value="oil field work" /><label for="oil field work">oil field work</label>
            <input id="14" type="checkbox" value="waste disposal" /><label for="waste disposal">waste disposal</label>
            <input id="15" type="checkbox" value="mechanic" /><label for="mechanic">mechanic</label>
            <input id="16" type="checkbox" value="maintenance" /><label for="maintenance">maintenance</label>
            <input id="17" type="checkbox" value="recycling" /><label for="recycling">recycling</label>
          <br />

          </div>
          Please upload a 15-30 second video for consideration: <input /> <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantForm);
