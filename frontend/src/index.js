import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Adapter from './Adapter'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';

const JOBS_URL = 'http://localhost:3001/jobs'
// const EMPLOYERS_URL = 'http://localhost:3001/employers'
// const JOB_APPS_URL = 'http://localhost:3001/job_apps'
const APPLICANTS_URL = 'http://localhost:3001/users'


const reducer = function(currentState, action = {}){
  let { type, payload } = action
  let newState = { ...currentState }
  switch(type){
    case 'FETCH_JOBS':
      fetch(JOBS_URL).then( response => response.json() )
        .then( jobs =>  {
          store.dispatch({
            type: 'RECIEVE_JOBS',
            payload: jobs
          })
        })
    break
    case 'RECIEVE_JOBS':
      newState.jobs = payload.jobs
    break
    case 'SELECT_JOB':
      newState.selectedJob = payload
    break;
    case 'SELECT_APPLICANT':
      newState.selectedApplicant = payload
    break;
    case "SET_USER":
      newState.user = payload
      if (localStorage.token !== "undefined") {
        newState.isLoggedIn = true
      }
    case 'LOGIN_REDIRECT':
      newState.toggleLogin = true
    break;
    case 'SIGNUP_REDIRECT':
      newState.toggleSignUp = true
    break;
    case 'SUBMIT_CREDENTIALS':
      Adapter.createNewUser({
        user_type: payload.user_type,
        email: payload.email,
        password: payload.password
      })
    break;
    case 'FETCH_APPLICANT_PROFILE':
      let USER_URL = APPLICANTS_URL + `/${action.payload}`
      fetch(USER_URL).then( r => r.json() )
        .then( user =>  {
          store.dispatch({
            type: 'SET_APPLICANT_PROFILE',
            payload: user
          })
        })
    break;
    case 'SET_APPLICANT_PROFILE':
      newState.applicantProfile = payload.user
      newState.isLoaded = true
    break
  }
  return newState
}

const store = createStore(
    reducer,
    {
      jobs: [],
      selectedJob: null,
      selectedApplicant: null,
      user: {id: 120, email: "ake52@example.com", user_type: "applicant"},
      applicantProfile: null,
      isLoggedIn: true,
      toggleSignUp: false,
      toggleLogin: false,
      isLoaded: false,
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
