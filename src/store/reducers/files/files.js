import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  error:null,
  files:null,
  loading:false,
  path:null
};

const reducer = (state=initialState,action) => {
  switch(action.type){
    case actionTypes.GET_FILES_START:
      return {...state,loading:true,error:null};
    case actionTypes.GET_FILES_SUCCESS:
      return {...state,loading:false,error:null,files:action.files};
    case actionTypes.GET_FILES_FAIL:
      return {...state,loading:false,error:action.error,files:null};
    case actionTypes.SET_PATH:
      return {...state,path:action.path};
    case actionTypes.DELETE_FILE_OR_FOLDER:
      let newFiles = [...state.files];
      newFiles = newFiles.filter(file=> file.id !== action.id);
      return {...state, files:newFiles};
    default:
      return state;
  }
};

export default reducer;