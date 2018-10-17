import * as actionTypes from '../../actions/actionTypes';
import reducer from './files';

describe('Files reducer', () => {
  let initialState ={
    error: null,
      files: null,
      loading: false,
      path: null
  };

  it('Should return initial state', () => {
    expect(reducer(initialState, {})).toEqual({
      error: null,
      files: null,
      loading: false,
      path: null
    });
  });

  it('Should return files',()=>{
    expect(reducer(initialState,{
      type:actionTypes.GET_FILES_SUCCESS,
      files:[{".tag":"file",name:"File one",id:"sdkjxs"},{".tag":"file",name:"File two",id:"skckda"},{".tag":"folder",name:"Folder one",id:"skldkcmk"},{".tag":"file",name:"File three",id:"skcjxmskxmsx"},{".tag":"folder",name:"Folder two",id:"oproptf"}]
    })).toEqual({
      error:null,
      files:[{".tag":"file",name:"File one",id:"sdkjxs"},{".tag":"file",name:"File two",id:"skckda"},{".tag":"folder",name:"Folder one",id:"skldkcmk"},{".tag":"file",name:"File three",id:"skcjxmskxmsx"},{".tag":"folder",name:"Folder two",id:"oproptf"}],
      loading:false,
      path:null
    });
  });

  it('Should return Path set to "/Books"',()=>{
    expect(reducer(initialState,
      {
        type:actionTypes.SET_PATH,
        path:'/Books'
      }
    )).toEqual({
      error: null,
      files: null,
      loading: false,
      path: '/Books'
    })
  })
});
