import React, { Component } from 'react';
  // Setting the component's initial state



class AddItemForm  extends Component {
  constructor(props) {
    super(props);
}


renderOptionNames = () => {
    console.log(this.props.user)
    let optionNames = this.props.user.map(optionName => ( 
       <option value={optionName.id}>{optionName.name} </option> 
      ));
      return optionNames

  }


  render() {


     console.log('inside AddItemForm', this.props.user);
    let style= {
        maxWidth: '35px'
    }

    return (
            <form >
                <h2>Add a needed item</h2>
                <div className="item-description newItem">
                 <div className="row">
                    <span className="whichUser col-md-4 col-xs-12">
                        <label>Select User:</label>
                        <select
                                className="form-control selectUser"
                                name="name"
                                value={this.props.user.name} 
                                onChange={this.props.user.handleInputChange}>
                                {this.renderOptionNames()}
                        </select>
                    </span>
                    <span className="col-md-4 col-xs-12">
                        <label>Item description:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.props.user.items}
                            onChange={this.props.user.handleInputChange} />
                    </span>
                 </div>

                    
                        <div className="col-md-4 col-xs-12 quantityNeeded">
                        <label>quantity needed: </label>
                        <input
                            style={style}
                            type="text" 
                            value={this.props.user.items}
                            onChange={this.props.user.handleInputChange} />
                        </div>
 
                 </div>
            
                <div className="btn-group mt-3">
                 <button  onClick={this.handleAddItem} className="btn btn-secondary">Add another</button>
                 <button onClick={this.handleFormSubmit} type="submit" className="btn btn-secondary">Submit</button>
                </div>

        </form>
            );
}};


export default AddItemForm;