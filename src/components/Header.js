import React, { Component } from 'react';

class Header extends Component {

  setPath = function (pathway){
    pathway = pathway.replace(/\//i,'');
    let newStr;;
    let arr = pathway.split('/'), newArr=["Home"];
    for(let i =0; i<arr.length; i++){
      if(arr[i] !== ""){
        let val =arr[i].split('');
        val[0] = val[0].toUpperCase();
        newArr.push(val.join(''));
      }
    }
    newStr = newArr.join('/');
    return newStr;
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="container my-3">
            <h4>{this.setPath(this.props.pathway)}</h4>
        </div>
        <div className="row my-4">
          <div className="col-9 col-md-4">
            <p>Name</p>
          </div>
          <div className="col-md-3 d-none d-md-block">
            <p>File Size</p>
          </div>
          <div className="col-md-3 d-none d-md-block">
            <p>Modified</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
