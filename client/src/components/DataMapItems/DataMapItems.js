import React, {Component} from 'react';
import NewBudget from '../NewBudget/NewBudget';


class DataMapItems  extends Component {


  render() {

  return (

    
    <div 
        className="UserInfo"
        style={{textAlign: "center", fontSize: "23px"}}>
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
                  of this item were just purchaced for 
                  <input
                      style={{margin: "5px"}}
                      type="text"
                      onChange={this.props.handleBudgetChange}
                  />
                  <br/>
                  </div>
                  <button 
                          style={{background: "#b9b992"}}
                          onClick={() => {
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