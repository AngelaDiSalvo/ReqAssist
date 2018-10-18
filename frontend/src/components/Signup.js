import React from 'react'
import { connect } from 'react-redux'


const Signup = (props) => {
  return (
    <form onSubmit={e => props.submitCredentials(e)} id="login-box">
      <div className="left" >
        <h1>Sign up</h1>
        <select name="user type" >
          <option>applicant</option>
          <option>employer</option>
        </select>
        <input type="text" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="password2" placeholder="Retype password" />
        <input type="submit" name="signup_submit" value="Sign me up" />
      </div>
    </form>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    submitCredentials: (e) => {
      e.preventDefault()
      if (e.target[2].value === e.target[3].value) {
        const payload = {
          user_type: e.target[0].value,
          email: e.target[1].value,
          password: e.target[2].value
        }
        dispatch({ type: 'SUBMIT_CREDENTIALS', payload})
      } else {
        alert("Error: password must match");
      }
      window.location.reload()
    }
  }
}

export default connect(null, mapDispatchToProps)(Signup)
