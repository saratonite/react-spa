export default function projects(state = [] , action = {}){


  switch(action.type)
  {

    case "FETCH_PROJECTS":

        return action.payload;

        break;

    default :  return state;
  }


}
