import * as actionTypes from './actionTypes';
import {Dropbox} from 'dropbox';
import fetch from 'isomorphic-fetch';

export const authStart = () =>{
  return {
    type:actionTypes.AUTH_START
  };
};

export const authFail = (error)=>{
  return{
    type:actionTypes.AUTH_FAIL,
    error
  };
};

export const authSuccess =(accessToken) =>{
  return {
    type:actionTypes.AUTH_SUCCESS,
    accessToken
  };
};

export const auth = (code)=>{
  return dispatch =>{
    if(code.length > 0){
      dispatch(authStart());
      var dropbox = new Dropbox({clientId:actionTypes.CLIENT_ID,fetch:fetch});
      dropbox.setClientSecret(actionTypes.CLIENT_SECRET);
      dropbox.getAccessTokenFromCode("http://localhost:3000",code).then(res=>{
        let date = new Date();
        localStorage.setItem('data',JSON.stringify({token:res,expirationTime:date.setHours(date.getHours() + 3)}));
        dispatch(authSuccess(res));
      }).catch(err=>
        dispatch(authFail(err))
        );    
      
    }
  };
};

export const checkAuthState = ()=>{
  return dispatch =>{
    let data = JSON.parse(localStorage.getItem('data'));
    if(!data){
      dispatch(authFail('No token'));
    }else{
      let expirationTime = new Date(data.expirationTime);
      if(expirationTime > new Date()){
      dispatch(authStart());
      dispatch(authSuccess(data.token));
      }else{
        localStorage.removeItem('data');
        dispatch(authFail('No token'));
      }
    }
  }
}