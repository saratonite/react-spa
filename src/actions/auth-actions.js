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
          console.log(e);
          dispatch({type:'LOGIN_ERROR',payload:e})
        })
  }
}

export function signupUsinEmail(email,password){

  return dispatch => {
    auth.createUserWithEmailAndPassword(email,password)
        .then(data =>{
          console.info('Signup Successfully',data);
          dispatch({type:'SIGNUP_ERROR',payload:data})

        })
        .catch(error =>{
          console.log(error);
          dispatch({type:'SIGNUP_SUCCESS',payload:error})

        })
  }

}
