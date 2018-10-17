import React from 'react'
import { connect } from 'react-redux'
import Adapter from '../../Adapter'

class EmployerJobForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()

    Adapter.createNewJob({
      company_name: e.target[0].value,
      phone: e.target[1].value,
      position: e.target[3].value,
      position_description: e.target[4].value,
      job_zip: e.target[2].value,
      requirements: e.target[5].value,
      comments: e.target[6].value,
      // experience: e.target[7].value,
      // job_type: e.target[8].value,
      employer_id: this.props.user.id
    })

  }

  render() {
    return (
      <div className='EmployerJobForm'>
        <form onSubmit={this.handleSubmit}>
          Company Name: <input /> <br />
          Phone: <input /> <br />
          Job Zip: <input /> <br />
          Position: <input /> <br />
          Position Description: <input /> <br />
          Requirements: <input /> <br />
          Comments: <input /> <br />
          Experience Required: <select>
            <option value="0">new hire</option>
            <option value="1">experienced</option>
            <option value="2">very experienced</option>
            <option value="3">foreman</option>
          </select> <br />
          Job Type: <select>
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
          </select>
          <br />
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



export default connect(mapStateToProps)(EmployerJobForm);
