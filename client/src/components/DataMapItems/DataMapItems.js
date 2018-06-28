import React from 'react';

const DataMapItems = props =>

			<div>
                <h4>
                and needs {props.chosenUser.items.map(item => {
                  console.log(item, "item")
                  return ( 
                    <p id={item._id}>
                        <span onClick={() => {props.removeItem(props.chosenUser._id ,item._id)}}
                              className="remove">
                               𝘅
                        </span>
                        {item.quantity} of {item.description}
                        <button>Done</button>


                    </p>
                   )
                  }
 
                )}
                </h4>
            </div>


export default DataMapItems;