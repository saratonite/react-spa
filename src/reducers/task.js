export default function TaskReducer(state = {list:{},singleTask:{},newTask:{title:'',description:''}} , action){

  switch(action.type) {
    case 'FETCH_TASK_LIST':
        return { ...state,list:action.payload}

    case 'TASK_CREATED':
        return { ...state, newTask:{title:'',description:''}}

    default:
       return state;
  }

}
