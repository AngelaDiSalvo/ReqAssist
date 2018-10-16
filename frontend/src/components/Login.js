import React from 'react'
import '../css/homepage.css';
import { connect } from 'react-redux'



const Login = (props) => {
  return (
    <div id='login-box'>
      <div className="left">
        <form onSubmit={e => props.handleLogin(e)}>
          <label>
            Email:
            <input type="text" username="email"/>
            Password:
            <input type="password" password="password"/>
          </label>
          <input type="submit" value="Login"/>
        </form>
      </div>
  </div>
  )
}

function handleLogin(e, dispatch) {
  e.preventDefault()
  let email = e.target[0].value
  let password = e.target[1].value

  fetch('http://localhost:3001/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: {
        email,
        password
      }
    })
  })
  .then(resp => resp.json())
  .then(data_with_token => {
    console.log(data_with_token);
    if (!!data_with_token.jwt) {
      localStorage.token = data_with_token.jwt;
      dispatch({type: "SET_USER", payload: data_with_token.user})
    } else {
      localStorage.token = "undefined"
    }
  })

  // Adapter.loginUser({
  //   email: e.target[0].value,
  //   password: e.target[1].value
  // })
  // .then(data_with_token => {
  //   console.log(data_with_token);
  //   dispatch({type: "SET_USER", payload: data_with_token})
  // })

}

function mapDispatchToProps(dispatch) {
  return {
    handleLogin: (e) => (handleLogin(e, dispatch))
  }
}

export default connect(null, mapDispatchToProps)(Login)
