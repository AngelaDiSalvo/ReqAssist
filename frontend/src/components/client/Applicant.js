import React from 'react'
import { connect } from 'react-redux'

const Applicant = ({applicant, selectApplicant}) => {
  return (
    <div className='Applicant'>
      <li onClick={() => selectApplicant(applicant)}>{applicant.id}: {applicant.name}</li>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(null, mapDispatchToProps)(Applicant)
