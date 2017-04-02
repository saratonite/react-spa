export default function projects(state = {list:[],singleProject:{},isLoading:false} , action = {}){


  switch(action.type)
  {

    case "FETCH_PROJECTS":

        return {...state,list:action.payload}

    case "FETCH_SINGLE_PROJECT":

        return { ...state , singleProject : action.payload }

    case "TOGGLE_LOADER":

        return { ...state, isLoading:action.payload }

    default :  return state;
  }


}
