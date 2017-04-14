import { combineReducers } from 'redux';

import projects from './projects';
import task from './task';
import repository   from './repository'
import auth from './auth';

export default combineReducers({
  repository:repository,
  project:projects,
  task,
  auth

})
