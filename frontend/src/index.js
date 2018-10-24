import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Adapter from './Adapter'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

const JOBS_URL = 'http://localhost:3001/jobs'
const APPLICANTS_URL = 'http://localhost:3001/users'

const reducer = function(currentState , action = {}){
  let { type, payload } = action
  let newState = { ...currentState }
  switch(type){
    case 'FETCH_JOBS':
      fetch(JOBS_URL, {headers: {Authorization: `Bearer ${localStorage.token}`}}).then( response => response.json() )
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
    case 'REPLACE_JOB':
      console.log(payload);
      console.log(action.payload);
      const allJobsExceptOne = currentState.jobs.filter(job => {
        return job.id != action.payload.job.id
      })
      newState.jobs = [...allJobsExceptOne, action.payload.job ]
      newState.selectedJob = action.payload.job
      newState.selectedApplicant = null
    break
    case 'SELECT_JOB':
      newState.selectedJob = payload
    break;
    case 'SELECT_APPLICANT':
      newState.selectedApplicant = payload
      newState.is_job_profile_expanded = false
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
      fetch(USER_URL, {headers: {"Authorization": `Bearer ${localStorage.token}`}}).then( r => r.json() )
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
    case 'STORE_POSTED_JOBS':
      newState.postedJobs = payload.user.posted_jobs
      newState.isLoaded = true
    break
    case 'STORE_ALL_APPLICANTS':
      newState.all_applicants = payload
      newState.isLoaded = true
    break
    case 'CREATE_JOB_APP':
      if (currentState.selectedJob) {
        const job_prof_ids = currentState.selectedJob.job_profiles.map( prof => {
          return prof.id
        })
        const filtered_list = payload.filter(function(obj) { return job_prof_ids.indexOf(obj) == -1; });

        filtered_list.map(id => {
          Adapter.createNewJobApp(id, currentState.selectedJob.id)
          .then( r => r.json())
          .then( job => {
            store.dispatch({
              type: 'REPLACE_JOB',
              payload: job
            })
          })
        })
    }
    break
    case 'FIND_THEN_DELETE_JOB_APP':
      Adapter.destroyJobApp(payload)
      .then(r => r.json())
      .then( job => {
        store.dispatch({
          type: 'REPLACE_JOB',
          payload: job
        })
      })
    break
    case 'TOGGLE_PROFILE_EXPAND':
      newState.is_job_profile_expanded = !currentState.is_job_profile_expanded
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
      user: null,
      applicantProfile: null,
      postedJobs: null,
      isLoggedIn: false,
      toggleSignUp: false,
      toggleLogin: false,
      isLoaded: false,
      all_applicants: null,
      is_job_profile_expanded: false,
    }
)

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
  ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
