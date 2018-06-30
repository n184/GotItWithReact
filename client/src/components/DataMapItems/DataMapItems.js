import React, {Component} from 'react';
import NewBudget from '../NewBudget/NewBudget';


class DataMapItems  extends Component {


  render() {

  return (

    
    <div 
        className="UserInfo"
        style={{textAlign: "center", fontSize: "30px"}}>

        <p>and needs {this.props.chosenUser.items.map(item => {
            return ( 
              <p 
                 id={item._id}>
                  {item.quantity} of {item.description}.
                  <br/>
                  <span onClick={() => 
                      {this.props.removeItem(this.props.chosenUser._id ,item._id)}
                  }
                  className="remove">
                  𝘅 Delete this item!
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
                  <button onClick={() => {
                      this.props.handleBudgetChangeSubmit(this.props.chosenUser._id ,item._id)
                  }}>
                  Done
                  </button>
                  <hr/>
              </p>
            )
        })}
        </p>


    </div>

  )
 }
}

export default DataMapItems;