import React, {Component} from 'react';
import './DataMapItems.css';
import NewBudget from '../NewBudget/NewBudget';
import Style from 'style-it';

class DataMapItems  extends React.Component {


  render() {


  return (

    
        <div className="UserInfo">
        <p>and needs {this.props.chosenUser.items.map(item => {
            console.log(item, "item")
            return ( 
              <p id={item._id}>
                  {item.quantity} of {item.description}.
                  <span onClick={() => {this.props.removeItem(this.props.chosenUser._id ,item._id)}}
                      className="remove">
                      𝘅
                  </span>
                  <br/>
                  <div className="alert alert-warning">
                  This item was just purchaced for 
                  <input 
                        type="text"
                        onChange={this.props.handleBudgetChange}
                  />
                  <br/>
                  </div>
                  <button onClick={() => {this.props.handleBudgetChangeSubmit(this.props.chosenUser._id ,item._id)}}>Done</button>
              </p>
            )})}
        </p>


        </div>

        )}}

export default DataMapItems;