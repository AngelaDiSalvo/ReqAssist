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
    selectApplicant: (applicant) => dispatch({type: "SELECT_APPLICANT", payload: applicant})
  }
}

export default connect(null, mapDispatchToProps)(Applicant)
