import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import * as actions from './store/actions/index';
import DropboxBuilder from './containers/DropboxBuilder/DropboxBuilder';
import Authentication from './containers/Authentication';
import Aux from './hoc/Auxilliary/Auxilliary';
import Spinner from './components/Spinner/Spinner';
import Navbar from './components/Navbar';

export class App extends Component {
  componentDidMount(){
    this.props.checkAuthState();
    if(this.props.location.search.includes("?code")){
      this.props.auth(this.props.location.search.replace("?code=", ""));
    }
    this.props.setPath(this.props.location.pathname);
  }

  render() {
    let component = <Authentication />;

    if(this.props.isAuthenticated){
      component = (
        <div>
          <Navbar />
          <Route path={this.props.match.url} component={DropboxBuilder} />
        </div>
      );

    }

    if(this.props.loading){
      component = <Spinner />;
    }
    return (
      <Aux>
        {component}
      </Aux>
    );
  }
}

const mapStateToProps = state =>{
  return{
    isAuthenticated:state.auth.accessToken !== null,
    loading:state.auth.loading
  };
}

const mapDispatchToProps = dispatch =>{
  return {
    checkAuthState: ()=> dispatch(actions.checkAuthState()),
    auth:(code)=> dispatch(actions.auth(code)),
    setPath:(path) => dispatch(actions.setPath(path))
  };
};

App.propTypes = {
  isAuthenticated:PropTypes.bool,
  loading:PropTypes.bool,
  checkAuthState:PropTypes.func,
  auth:PropTypes.func,
  setPath:PropTypes.func
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
