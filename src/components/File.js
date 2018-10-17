import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {ListGroupItem} from 'reactstrap';
import DropDown from './DropDown/DropDown';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

class File extends Component {
  // componentDidMount(){
  //   if(this.props.history.location.search.includes("?preview")){
  //     this.props.getFilePreview(this.props.token,this.props.file.path_lower);
  //   }
  // }
  
  getDate(unformattedDate){
    return new Date(unformattedDate).toLocaleString();
  }

  getPath(){
    let link = this.props.file.path_lower.replace('/' + this.props.file.name.toLowerCase(),"");
    link = link + '?preview=' + this.props.file.name;
    return link;
  }

  goToPath(){
    let link = this.props.file.path_lower.replace('/' + this.props.file.name.toLowerCase(),"");
    link = link + '?preview=' + this.props.file.name;
    this.props.history.push(link);
   // this.props.getFilePreview(this.props.token,this.props.file.path_lower);
  }

  selectItem(){
    let element = document.getElementById("select-"+ this.props.file.id);
    if(element.checked){
      element.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("bg-warning");
    }else{
      element.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove("bg-warning");
    }
  }

  render() {
    return (
      <ListGroupItem>
        <div className="row">
          <div className="col-md-4 col-9">
            <div className="d-flex align-items-start">
              <label className="custom-control custom-checkbox">
                <input type="checkbox" name={this.props.file.name} className="custom-control-input deleteSelector" id={"select-"+this.props.file.id} onClick={()=> this.selectItem()} />
                <span className="custom-control-label"></span>
              </label>
              <Link to={this.getPath()} onClick = {() => this.goToPath()} className="text-truncate" title={this.props.file.name}>
                <p className="ml-3"><i className="fas fa-file mr-3"></i>{this.props.file.name}</p>
              </Link>
            </div>
          </div>
          <div className="col-md-3 d-none d-md-block" onClick={() => this.goToPath()}>
            <p className="text-truncate">{this.props.file.size}</p>
          </div>
          <div className="col-md-3 d-none d-md-block" onClick={() => this.goToPath()}>
            <p className="text-truncate mr-2">{this.getDate(this.props.file.client_modified)}</p>
          </div>
          <div className="col-md-2 col-3">
          <DropDown id={this.props.file.id} name ={this.props.file.name}/>
          </div>
        </div>
      </ListGroupItem>
    );
  }
}

const mapStateToProps = (state) => ({
  token:state.auth.accessToken
});

const mapDispatchToProps = dispatch => {
  return {
    getFilePreview:(token,path) => dispatch(actions.displayFile(token,path))
  };
};


File.propTypes ={
  getFilePreview:PropTypes.func,
  token:PropTypes.string
}

export default connect(mapStateToProps,mapDispatchToProps)(File);