export default (state = [], action) => {
    switch(action.type){
         case 'FETCH_PROVIDERS':
              return action.payload;
        case 'SERVICE_SELECTED':
            return state.filter(element => element !== action.payload ? action.payload : element);
         default:
             return state;
    }   
 }

 