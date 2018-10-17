import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import * as actions from '../../store/actions/index';
import Aux from '../../hoc/Auxilliary/Auxilliary';
class DropDown extends Component {

  state = {
      dropdownOpen: false
    };

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onDeleteItemHandler(id){
    this.props.deleteItem(id);
    const alertBox = document.createElement('div');
    alertBox.className ="alert bg-success text-light fixed-message-box message-box-width text-center";
    alertBox.textContent = `Success! ${this.props.name} has been deleted`;
    document.querySelector('body').appendChild(alertBox);
    
    setTimeout(()=>{
      document.querySelector('body').removeChild(alertBox);
    },3000);
  }

  render() {
    return (
      <Aux>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>
          <DropdownToggle className="icon-btn btn btn-outline-secondary btn-sm">
            ...
        </DropdownToggle>
          <DropdownMenu>
            <DropdownItem id={this.props.id} tag="button" onClick={() => this.onDeleteItemHandler(this.props.id)}>Delete</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Aux>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
  deleteItem:(id)=> dispatch(actions.deleteFileOrFolder(id))
  };
}


export default connect(null,mapDispatchToProps)(DropDown);