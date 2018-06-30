import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddUserForm.css';

class AddUserForm  extends Component {


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
                
                <button 
                    onClick={this.props.handleUserSubmit}
                    type="submit" 
                    className="btn btn-secondary submit">
                    Submit
                </button>
            </div>

        </form>
            );

  }};


AddUserForm.propTypes = {
    addUser: PropTypes.object,
    handleInputChange: PropTypes.func,
    handleUserSubmit: PropTypes.func

};

export default AddUserForm;