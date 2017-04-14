export default function auth(state = {user:null}, action = {}) {
  switch (action.type) {
    case 'LOGED_IN':
      console.log('Logged In')
      break;
    case 'AUTH_CHANGE':
      console.log('Reducer::Auth::AuthChange',action.payload);
      return {...state,user:action.payload}
    default:
      return state;

  }

}
