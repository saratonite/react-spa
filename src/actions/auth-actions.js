import fb from '../database';

let auth = fb.Auth;

export function authChange() {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      if(user){
        console.log('Yep')
      }
      else{
        console.log('Nope')
      }
      dispatch({type:'AUTH_CHANGE',payload:user});
    })
  }
}

export function loginUsingEmail(email,password) {

  return dispatch => {
    auth.signInWithEmailAndPassword(email,password)
        .then((user) => {
          console.log('Successfully loged in')
          dispatch({type:'LOGED_IN',payload:user})
        })
        .catch(e=>{
          console.log('Login Error!!')
          dispatch({type:'LOGIN_ERROR',payload:e})
        })
  }
}
