export default function TaskReducer(state = {list:{},singleTask:{},newTask:{title:'',description:'',completed:false}} , action){

  switch(action.type) {
    case 'FETCH_TASK_LIST':
        return { ...state,list:action.payload}

    case 'TASK_CREATED':
        return { ...state, newTask:{title:'',description:''}}

    case 'FETCH_SINGLE_TASK':
        return { ...state, singleTask:action.payload };
    default:
       return state;
  }

}
