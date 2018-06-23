import React, { Component } from 'react';

import './AddUserForm.css';

import { Link } from "react-router-dom";
import  API from '../../utils/API';

class AddUserForm  extends Component {

  constructor(props) {
    super(props);

}
/*
   state = { user: {
    name: "",
    overAllBudget: 0
   } };

         handleInputChange = event => {
    
console.log('handleInputChange', event)
    event.preventDefault();
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    let name = event.target.name;
       this.setState({
        user:{...this.state.user,
          [name]: value
        }
      });
       console.log(this.state.user)
  };

      handleUserSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log(this.state.user)
    if (!this.state.user.name || !this.state.user.overAllBudget) {
      alert("Fill out your information!");
    } else {
      alert(`Hello ${this.state.user.name}`);
          API.saveUser({
        name: this.state.user.name,
        overAllBudget: this.state.user.overAllBudget

      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };



  deleteUser = id => {
    API.deleteUser(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };
*/



  render() {

    return (
         <form >
            <h2>Tell us about yourself!</h2>
             <div className="row">
                <div className="user-description newUser col-md-6 col-xs-12">
                    <label>Name: </label>
                    <input
                        type="text" 
                        name="name"
                        value={this.props.addUser.name}
                        onChange={this.props.handleInputChange} />
                </div>
                <div className="input-group mb-3 wBudget col-md-6 col-xs-12">
                    <label>The allocated budget is: </label>
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input
                        type="text"
                        name="overAllBudget"
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                        value={this.props.addUser.overAllBudget}
                        onChange={this.props.handleInputChange} />
                    <div className="input-group-append">
                        <span className="input-group-text">.00</span>
                    </div>
                </div>
            </div>
            <div className="btn-group mt-3">
                 <button  onClick={this.props.handleAddUser} className="btn btn-secondary">Add another</button>
                 <button onClick={this.props.handleUserSubmit} type="submit" className="btn btn-secondary">Submit</button>
            </div>

        </form>
            );

  }};




export default AddUserForm;