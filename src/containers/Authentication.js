import React, { Component } from 'react';
import {Dropbox} from 'dropbox';
import fetch from 'isomorphic-fetch';
import * as actionTypes from '../store/actions/actionTypes';

class Authentication extends Component {
  componentDidMount(){
    this.getUrl();
  }

  getUrl(){
    var dropbox = new Dropbox({clientId:actionTypes.CLIENT_ID,fetch:fetch});
    var authUrl = dropbox.getAuthenticationUrl('http://localhost:3000',null,"code");
    document.getElementById('authlink').href = authUrl;
  }

  render() {
    return (
      <div className="container">
        <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
          <div className="col-12 col-md-4">
            <div className="px-2 mb-3">
              <h3 className="text-center"><i className="fab fa-dropbox fa-lg mr-3"></i> Dropbox API</h3>
            </div>
            <p className="display-5 text-center">Click the button below to Authenicate yourself and check your folders and files.</p>
            <a className="btn btn-lg btn-block btn-info text-white" id="authlink" href="http://localhost">Authenicate</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Authentication;