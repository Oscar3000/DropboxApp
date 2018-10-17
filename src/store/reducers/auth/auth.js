import * as actionTypes from '../../actions/actionTypes';

const initialState ={
  error:null,
  accessToken:null,
  loading:false
};



const reducer = (state=initialState,action) =>{
  switch(action.type){
    case actionTypes.AUTH_START:
      return {...state, loading:true, error:null};
    case actionTypes.AUTH_SUCCESS:
      return {...state, accessToken:action.accessToken,loading:false};
    case actionTypes.AUTH_FAIL:
      return {...state,loading:false,accessToken:null,error:action.error};
    default:
      return state;
    
  }
};


export default reducer;