import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ListGroupItem} from 'reactstrap';
import DropDown from './DropDown/DropDown';

class Folder extends Component {
  goToPath(){
    this.props.history.push(this.props.file.path_lower);
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
                <input type="checkbox" name={this.props.file.name} className="custom-control-input deleteSelector" id={"select-"+this.props.file.id} onClick={()=>this.selectItem()}/>
                <span className="custom-control-label"></span>
              </label>
              <Link to={this.props.file.path_lower} title={this.props.file.name}>
                <p className="text-truncate ml-3"><i className="fas fa-folder mr-3"></i>{this.props.file.name}</p>
              </Link>
            </div>
          </div>
          <div className="col-md-3 d-none d-md-block" onClick={() => this.goToPath()}>
            <p className="text-truncate">...</p>
          </div>
          <div className="col-md-3 d-none d-md-block" onClick={() => this.goToPath()}>
            <p className="text-truncate">...</p>
          </div>
          <div className="col-md-2 col-3">
            <DropDown id={this.props.file.id} name={this.props.file.name}/>
          </div>
        </div>
      </ListGroupItem>
    );
  }
}

export default Folder;