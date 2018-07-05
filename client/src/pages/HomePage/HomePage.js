import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Layout from '../../components/Layout/Layout';
import './HomePage.css';
import  API from '../../utils/API';
import AddUserForm from '../../components/AddUserForm/AddUserForm';
import AddItemForm from '../../components/AddItemForm/AddItemForm';
import Cards from '../../components/Cards/Cards';
import ToggleButtons from '../../components/ToggleButtons/ToggleButtons';
import DataMap from '../../components/DataMap/DataMap';
import DataMapItems from '../../components/DataMapItems/DataMapItems';


class HomePage extends Component {



  constructor (props) {
    super(props)
      this.state = { 
        user: [], 
        addUser: {
          name: "",
          overAllBudget: 0
        },
        addItem: {
            name: "",
            overallBudget: 0,
            description: "",
            quantity: 1
        },
        buttonClicked: "userForm",
        chosenUser: {},
        userToAdd: {},
        newBudget: 0
      };

  }

 componentDidMount() {
    this.setState({  user:
      [
        {
            name: "Maya",
            overallBudget: 300,
            items: 
                [
                    {
                        description: "",
                        quantity: 1,
                        price: 0
                    }
                ],
        },
      ]

    })

    this.loadUsers();
  };

  handleItemInput = event => {
    event.preventDefault();
    let value = event.target.value;
    let name = event.target.name;
    this.setState({
        addItem:{
          ...this.state.addItem,
          [name]: value
        }
      });
  };

  handleItemSubmit = event => {
    event.preventDefault();

    API.updateUser(
      this.state.userToAdd.id, 
      {
        name: this.state.userToAdd.name,
        description: this.state.addItem.description,
        quantity: this.state.addItem.quantity
      }
    )

    .then(res => this.loadUsers())
    .catch(err => console.log(err));
  };
  
  removeUser = id => {
    API.deleteUser(id)
      .then(res =>
          {
            this.setState({...this.state.user})
            this.loadUsers()
          }
      )
      .catch(err => console.log(err));
  };

  removeItem = (userid, itemid) => {
    API.deleteItem(userid, itemid)
      .then(res => {
            this.setState({chosenUser: res.data})
            this.loadUsers()
            }
      )
      .catch(err => console.log(err));
  };

  handleAddUser = event => {
    event.preventDefault();
    this.handleUserSubmit();
  };

  loadUsers = () => {
    API.getUsers()
      .then(res => {
        this.setState({...this.state.user, user: res.data })
        }
      )
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    event.preventDefault();
   
    let value = event.target.value;
    let name = event.target.name;
    console.log(name, "name")
    console.log(value, "value")
    for (let i =0; i < this.state.user.length; i++) {
      if (this.state.user[i].name === value) {
              this.setState({
                  userToAdd: {
                      [name]: value,
                      id: this.state.user[i]._id
                  }
              });
      }
    }
  };

  handleBudgetChange = event => { 
    event.preventDefault();  
      let itemCost = event.target.value;
      console.log(itemCost)
      this.setState({
        newBudget: {
          ...this.state.newBudget,
          newBudget: this.state.chosenUser.overAllBudget - itemCost
        }
      });
  };

  handleBudgetChangeSubmit = (userid, itemid) => {
     API.updateBudget(userid, this.state.newBudget)
      .then(res => {
            this.setState({chosenUser:
              {
                overAllBudget: this.state.newBudget
              }
            })
            this.removeItem(userid, itemid)
            this.loadUsers()
          })
      .catch(err => console.log(err));
  };


  handleAddUserChange = event => {
    event.preventDefault();
    
    let value = event.target.value;
    let name = event.target.name;
       this.setState({
        addUser:{
          ...this.state.addUser,
          [name]: value
        }
      });
  };


  handleUserSubmit = event => {
    event.preventDefault();

    if (!this.state.addUser.name || !this.state.addUser.overAllBudget) {
      alert("Fill out your information!");
    } else {
      alert(`Hello ${this.state.addUser.name}`);
          API.saveUser({
              name: this.state.addUser.name,
              overAllBudget: this.state.addUser.overAllBudget
          })
          .then(res => this.loadUsers())
          .catch(err => console.log(err));
    }

  };

  handleClick = value => {

    if (value === "userForm") {
      this.setState({ buttonClicked: "userForm" })
    } if (value === "itemForm") {
      this.setState({buttonClicked: "itemForm"})
    }
  };

  expandUser = id => {
    API.getUser(id)
      .then(res => {
        this.setState({
          chosenUser: res.data 
        })
      })
      .catch(err => console.log(err));
  }


  render() {

    return (
      <div className="homePage">
        <Layout>

          <div className="cd-fixed-bg cd-fixed-bg--6">< /div>
        
          <div style={{background: "#ebebe0"}}>
            <ToggleButtons
              handleClick={this.handleClick}
              style={{  color: "#b9b992", background: "white" }}
            />  

            {this.state.buttonClicked === "userForm" ?
              <AddUserForm
                addUser={this.state.addUser}
                handleInputChange={this.handleAddUserChange}
                handleUserSubmit={this.handleUserSubmit}
                handleAddUser={this.handleAddUser}
                className="cd-fixed-bg cd-fixed-bg--2" 
              />
             : <AddItemForm
                  user={this.state.user}
                  userToAdd={this.state.userToAdd}
                  addItem={this.state.addItem}
                  handleInputChange={this.handleInputChange}
                  handleItemInput={this.handleItemInput}
                  handleItemSubmit={this.handleItemSubmit}
                  className="cd-fixed-bg cd-fixed-bg--2" 
                />
            }
          </div>

          <div className="cd-fixed-bg cd-fixed-bg--5"></div>
       
          <div className="cd-fixed-bg cd-fixed-bg--3">
            <Cards
                user={this.state.user}
                removeUser={this.removeUser}
                expandUser={this.expandUser}
             />
          </div>
          
          <div className="cd-fixed-bg cd-fixed-bg--7"></div>

          {this.state.chosenUser.name  ?
              <DataMap
                className="cd-fixed-bg cd-fixed-bg--8"
                style={{background: "#ebebe0"}} 
                chosenUser={this.state.chosenUser}
              /> : null
          }

          {!this.state.chosenUser.items === "null" > 0  ?
              <DataMapItems
                
                removeItem={this.removeItem}
                className="cd-fixed-bg cd-fixed-bg--8" 
                chosenUser={this.state.chosenUser}
                handleBudgetChange={this.handleBudgetChange}
                handleBudgetChangeSubmit={this.handleBudgetChangeSubmit}
              /> :  
                <h4>Please select a user</h4> 
          }
    
      </Layout>
    </div>
    );
  }
}

export default HomePage;
  


