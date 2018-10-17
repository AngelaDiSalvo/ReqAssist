import React from 'react'
import { connect } from 'react-redux'

const EmployerProfile = ({applicantProfile}) => {
  const profile = applicantProfile.job_profiles[0]
  console.log(profile)
  return (
    <div className='EmployerProfile'>
      name: {profile.name} <br />
      phone: {profile.phone} <br />
      home zip: {profile.home_zip} <br />
      maximum travel radius: {profile.travel_radius}miles <br />
      position type: {profile.position_type} <br />
      minimum hourly rate: ${profile.min_wage_rate} <br />
      <br />
      <br />
      We are currently working with employers to find you a good fit.

    </div>
  )
}

function mapStateToProps(state) {
  return {
    applicantProfile: state.applicantProfile
  }
}
function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployerProfile)
