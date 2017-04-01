export default function projects(state = {list:[],singleProject:{}} , action = {}){


  switch(action.type)
  {

    case "FETCH_PROJECTS":

        return {...state,list:action.payload}

    case "FETCH_SINGLE_PROJECT":

        return { ...state , singleProject : action.payload };

    default :  return state;
  }


}
