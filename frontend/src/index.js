import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';

const JOBS_URL = 'http://localhost:3001/jobs'
// const EMPLOYERS_URL = 'http://localhost:3001/employers'
// const JOB_APPS_URL = 'http://localhost:3001/job_apps'
// const APPLICANTS_URL = 'http://localhost:3001/applicants'


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
    case 'APPLICANT_LOGIN':
        newState.userType = payload
    break;
    case 'EMPLOYER_LOGIN':
        newState.userType = payload
    break;
    case 'CLIENT_LOGIN':
      newState.userType = payload
    break;
  }
  return newState
}

const store = createStore(
    reducer,
    {
      jobs: [],
      selectedJob: null,
      selectedApplicant: null,
      userType: null,
      username: "",
      password: "",
      email: "",
      isLoggedIn: false,
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
