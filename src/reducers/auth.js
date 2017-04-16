export default function auth(state = {user:null,errors:{}}, action = {}) {
  switch (action.type) {
    case 'LOGED_IN':
      console.log('Logged In')
      break;
    case 'LOGIN_ERROR':
      return {...state,errors:action.payload}
      break;
    case 'SIGNUP_ERROR':
      return {...state,errors:action.payload}
      break;
    case 'SIGNUP_SUCCESS':
      return {...state,user:action.payload}
      break;
    case 'AUTH_CHANGE':
        console.log('Reducer::Auth::AuthChange',action.payload);
      return {...state,user:action.payload}
      break;
    default:
      return state;

  }

}
