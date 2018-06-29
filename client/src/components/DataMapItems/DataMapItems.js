import React, {Component} from 'react';

class DataMapItems  extends Component {

  newBudget= () => {
    console.log(this.props.chosenUser)
  let newBudget= this.props.chosenUser.overAllBudget - 50
   } 

  render() {


  return (

			<div>
                <h4>
                and needs {this.props.chosenUser.items.map(item => {
                  console.log(item, "item")
                  return ( 
                    <p id={item._id}>

                        {item.quantity} of {item.description}.
                                                <span onClick={() => {this.props.removeItem(this.props.chosenUser._id ,item._id)}}
                              className="remove">
                               𝘅
                        </span>
         
                        <input 
                                name="overAllBudget"
                                value={this.props.chosenUser.overAllBudget}
                                onChange={this.props.handleBudgetChange}
                        />
                        My new total is going to be 

                                       <br />This item was just purchaced for 
                        <div className="alert alert-warning newBudget"
                              role="alert">
                              {this.props.chosenUser.overAllBudget - 50}
                        </div>
                        <button>Done</button>


                    </p>
                   )
                  }
 
                )}
                </h4>
            </div>
)}}

export default DataMapItems;