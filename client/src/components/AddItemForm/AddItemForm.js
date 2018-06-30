import React, { Component } from 'react';
import PropTypes from 'prop-types';



class AddItemForm  extends Component {



renderOptionNames = () => {
    console.log(this.props.user)
    let optionNames = this.props.user.map(optionName => ( 
       <option value={optionName.id}>{optionName.name} </option> 
      ));
      return optionNames
  }


  render() {

     let description= {
        maxWidth: '70%'
    }
    let quantity= {
      marginTop: '45px'
    }

    return (
            <form >
                <h2>Add a needed item</h2>
                <div className="row">
                 
                    <span className="whichUser col-6">
                        <label>Select User:</label>
                        <select
                                style={{maxWidth: "65%", margin: "auto"}}
                                className="form-control selectUser"
                                name="name"
                                value={this.props.userToAdd.name} 
                                onChange={this.props.handleInputChange}>
                                {this.renderOptionNames()}
                        </select>
                    </span>
                    <span className="col-3"></span>
                    <div className="col-3 quantityNeeded">
                        <label>quantity needed: </label>
                        <input
                            style={{maxWidth: "35px", margin: "auto"}}
                            name="quantity"
                            type="text" 
                            value={this.props.addItem.quantity}
                            onChange={this.props.handleItemInput} />
                        </div>

                      </div>
                      <div className="row">
                    <span className="col-12">
                    <div className="item-description newItem">
                        <label>Item description:</label>
                        <input
                            style={{maxWidth: "50%", margin: "auto"}}
                            type="text"
                            name="description"
                            className="form-control"
                            value={this.props.addItem.description}
                            onChange={this.props.handleItemInput} />
                    </div>
                    </span>

                    

 
                 </div>
            
                <div className="btn-group mt-3">
                    <button 
                        onClick={this.props.handleItemSubmit}
                        type="submit" className="btn btn-secondary submit">
                        Submit
                    </button>
                </div>

        </form>
            );
}};

AddItemForm.propTypes = {
    user: PropTypes.arry,
    addItem: PropTypes.object,
    handleInputChange: PropTypes.func,
    handleUserSubmit: PropTypes.func

};


export default AddItemForm;