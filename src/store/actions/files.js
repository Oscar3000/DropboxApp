import * as actionTypes from './actionTypes';
import {Dropbox} from 'dropbox';
import fetch from 'isomorphic-fetch';


export const getFilesStart = ()=>{
  return {
    type:actionTypes.GET_FILES_START
  };
};

export const getFilesSuccess = (files) =>{
  return {
    type:actionTypes.GET_FILES_SUCCESS,
    files
  };
};

export const getFilesFail = (error) =>{
  return {
    type:actionTypes.GET_FILES_FAIL,
    error
  };
};


export const getFiles = (token,path) =>{
  if(path === "/"){
    path = '';
  }
  return dispatch =>{
    dispatch(getFilesStart())
    if(token !== null){
      const dropbox = new Dropbox({fetch:fetch,accessToken:token});
      dropbox.filesListFolder({path:path})
        .then(res =>{
          dispatch(getFilesSuccess(res.entries));
        }).catch(err=>dispatch(getFilesFail(err)));
    }else{
      dispatch(getFilesFail('No token'));
    }
  };
};

export const displayFile =(token,path)=>{
  return dispatch =>{
  if(token !== null){
    const dropbox = new Dropbox({fetch:fetch,accessToken:token});
    dropbox.filesGetPreview({path})
        .then(res=>{
          const ieEDGE = navigator.userAgent.match(/Edge/g);
          const ie = navigator.userAgent.match(/.NET/g); // IE 11+
          const oldIE = navigator.userAgent.match(/MSIE/g); 

          if(ie || ieEDGE || oldIE){
            window.navigator.msSaveBlob(res.fileBlob);
          }
          else{
            const fileUrl = URL.createObjectURL(res.fileBlob);
            //It opens in a new browser. Change this to open in a single browser
            let win = window.open();
            win.document.write(`<iframe src="${fileUrl}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`);
          }
        }).catch(err=>console.log(err));
  }else{
    dispatch(getFilesFail('no token'));
  }
  }
}

export const setPath = (path) => {
  return {
    type:actionTypes.SET_PATH,
    path
  };
};


export const deleteFileOrFolder = (id) =>{
  return {
    type:actionTypes.DELETE_FILE_OR_FOLDER,
    id
  };
};