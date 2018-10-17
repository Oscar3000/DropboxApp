import React, { Component } from 'react';
import {Navbar, NavbarToggler, NavbarBrand, Nav,NavItem,Collapse, Button, UncontrolledTooltip} from 'reactstrap';
import { connect } from 'react-redux';
import Aux from '../hoc/Auxilliary/Auxilliary';
import * as actions from '../store/actions/index';
import PropTypes from 'prop-types';

class Navbuilder extends Component {
  state ={
    isOpen:false
  };

   toggle = () =>{
    this.setState({isOpen:!this.state.isOpen});
   }

   ScrollBar(){
    document.addEventListener('scroll',()=>{
      var position = window.scrollY
      if (position >= 200) {
        document.getElementById("navbarMain").classList.add('fixed-top');
    } else {
      document.getElementById("navbarMain").classList.remove('fixed-top');
    }
    });
   }

   deleteItemsHandler(){
     let count =0;
     const checkboxes = document.querySelectorAll('.deleteSelector');
     for(let i =0; i<checkboxes.length;i++){
       if(checkboxes[i].checked){
          this.props.deleteItem(checkboxes[i].id.replace("select-",""));
          count++;
       }
     }

     if(count > 0){
      const alertBox = document.createElement('div');
      alertBox.className ="alert bg-success text-light fixed-message-box message-box-width text-center";
      alertBox.textContent = `Success! ${count} ${count > 1 ? 'items have':'item has'} been deleted`;
      document.querySelector('body').appendChild(alertBox);
      
      setTimeout(()=>{
        document.querySelector('body').removeChild(alertBox);
      },3000);
     }else{
      const alertBox = document.createElement('div');
      alertBox.className ="alert bg-warning text-dark fixed-message-box message-box-width text-center";
      alertBox.textContent = 'No Item has been selected!';
      document.querySelector('body').appendChild(alertBox);
      
      setTimeout(()=>{
        document.querySelector('body').removeChild(alertBox);
      },3000);
     }
   }

  render() {
    this.ScrollBar();
    return (
      <Aux>
      <Navbar expand="md" className="bg-dark shadow-sm" dark id="navbarMain">
            <NavbarToggler onClick={this.toggle} />
            <NavbarBrand href="/">
            <i className="fab fa-dropbox fa-lg mr-3"></i> Dropbox API
            </NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem className="mx-lg-3 my-sm-2 my-1">
                        <Button outline color="secondary" className="mr-3" id="disabledBtn">Add</Button>
                        <Button outline color="info" className="mr-3"  id="disabledBtn2">Edit</Button>
                        <Button outline color="danger" className="mr-3" id="deleteBtn" onClick={()=> this.deleteItemsHandler()}>Delete</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        <UncontrolledTooltip placement="bottom" target="disabledBtn">
          This button is Disabled
        </UncontrolledTooltip>
        <UncontrolledTooltip placement="right" target="disabledBtn2">
          This button is Disabled
        </UncontrolledTooltip>
        <UncontrolledTooltip placement="bottom" target="deleteBtn">
          Delete Selected Rows
        </UncontrolledTooltip>
      </Aux>
    );
  }
}


const mapDispatchToProps =  dispatch => {
  return {
    deleteItem:(id) => dispatch(actions.deleteFileOrFolder(id))
  };
};

Navbuilder.propTypes ={
  deleteItem:PropTypes.func,
  isOpen:PropTypes.bool
}

export default connect(null, mapDispatchToProps)(Navbuilder);