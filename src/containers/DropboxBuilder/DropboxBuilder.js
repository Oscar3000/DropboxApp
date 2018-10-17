import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../store/actions';
import Header from '../../components/Header';
import File from '../../components/File';
import Folder from '../../components/Folder';
import Spinner from '../../components/Spinner/Spinner';
import DocumentTitle from 'react-document-title';

export class DropboxBuilder extends Component {
  componentDidMount(){
    this.props.getFiles(this.props.token,this.props.path);
  }

  componentDidUpdate(prevProps){
    if(this.props.location.pathname !== prevProps.location.pathname){
      this.props.setPath(this.props.location.pathname);
      this.props.getFiles(this.props.token,this.props.location.pathname);
    }
  }
  
  render() {
    let files = null;
    if(this.props.files){
     files = this.props.files.map((file,id)=>{
       if(file[".tag"] === "folder"){
          return <Folder key={file.id} file={file} history={this.props.history}/>
       }  
        return <File key={file.id} file={file} history={this.props.history}/>;
      });
    }

    if(this.props.loading){
      files = <Spinner />;
    }

    return (
      <DocumentTitle title={`Home${this.props.location.pathname === "/" ? "": this.props.location.pathname}`}>
        <div className="container">
        <section className="mx-md-3 my-5">
          <Header pathway = {this.props.location.pathname} />
          <ul className="my-3 list-group">
            {files}
          </ul>
        </section>
      </div>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state =>{
  return {
    token:state.auth.accessToken,
    files:state.files.files,
    path:state.files.path,
    loading:state.files.loading
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    getFiles:(token,path) => dispatch(actions.getFiles(token,path)),
    setPath:(path) => dispatch(actions.setPath(path))
  }
}

DropboxBuilder.propTypes ={
  getFiles:PropTypes.func,
  token:PropTypes.string,
  files:PropTypes.array,
  loading:PropTypes.bool
}


export default connect(mapStateToProps,mapDispatchToProps)(DropboxBuilder);