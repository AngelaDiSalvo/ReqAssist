import React from 'react'
import { connect } from 'react-redux'

const AllApplicant = ({applicant, selectApplicant}) => {
  return (
    <div className='AllApplicant'>
      <li onClick={() => selectApplicant(applicant)}>{applicant.id}: {applicant.name}</li>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(null, mapDispatchToProps)(AllApplicant)
