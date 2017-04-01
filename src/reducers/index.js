import { combineReducers } from 'redux';

import projects from './projects';
import repository   from './repository'

export default combineReducers({
  repository:repository,
  project:projects,

})
