import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Layout from '../Layout/Layout';
import './HomePage.css';
import  API from '../../utils/API';
import AddUserForm from '../../containers/AddUserForm/AddUserForm';
import AddItemForm from '../../containers/AddItemForm/AddItemForm';
import Cards from '../../components/Cards/Cards';
import ToggleButtons from '../ToggleButtons/ToggleButtons';
import DataMap from '../DataMap/DataMap';
import DataMapItems from '../DataMapItems/DataMapItems';


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
            //item: 
                   // {
                        description: "",
                        quantity: 1
                    //}
        },
        buttonClicked: "userForm",
        chosenUser: {},
        userToAdd: {}
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
    
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    let name = event.target.name;

    console.log(name, "name")
    console.log(value, "value")
       this.setState({
        addItem:{...this.state.addItem,
          [name]: value
        }
      });
       console.log(this.state.addItem)
  };

      handleItemSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log(this.state.userToAdd)

          API.updateUser(this.state.userToAdd.id, {
            name: this.state.userToAdd.name,
            description: this.state.addItem.description,
            quantity: this.state.addItem.quantity
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  



  removeUser = id => {
    console.log(id)
    API.deleteUser(id)
      .then(res =>
          {
            this.setState({...this.state.user})
            this.loadUsers()
          })
      .catch(err => console.log(err));
  };

    removeItem = (userid, itemid) => {
   
    API.deleteItem(userid, itemid)
      .then(res =>
          {
            this.setState({chosenUser: res.data})
            this.loadUsers()
          })
      .catch(err => console.log(err));
  };

  //   updateData = (userid, itemid) => {
   
  //   API.put(userid, itemid)
  //     .then(res =>
  //         {
  //           this.setState({chosenUser: res.data})
  //           this.loadUsers()
  //         })
  //     .catch(err => console.log(err));
  // };
  
  handleAddUser = event => {
    event.preventDefault();
    this.handleUserSubmit();

    };

  loadUsers = () => {
    API.getUsers()
    
      .then(res => {
        console.log(res.data)
        this.setState({...this.state.user, user: res.data })
         })
    .catch(err => console.log(err));
 
    };

      handleInputChange = event => {
    
console.log('handleInputChange', event)
    event.preventDefault();
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    let name = event.target.name;
    console.log(name, "name")
    console.log(value, "value")
    for (let i =0; i < this.state.user.length; i++) {
      if (this.state.user[i].name === value) {
               this.setState({
        userToAdd:{
          [name]: value,
          id: this.state.user[i]._id
        }
      });
      }
    }

  };

        handleBudgetChange = event => {
    
console.log('handleBudgetChange', event)
    event.preventDefault();
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    let name = event.target.name;
    console.log(name, "name")
    console.log(value, "value")
  this.setState({...this.state.chosenUser});


  };

        handleAddUserChange = event => {
    
console.log('handleInputChange', event)
    event.preventDefault();
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    let name = event.target.name;
       this.setState({
        addUser:{...this.state.addUser,
          [name]: value
        }
      });
       console.log(this.state.addUser)
  };


      handleUserSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log(this.state.addUser)
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
    // Preventing the default behavior (which is to refresh the page)
   // event.preventDefault();
    //const value = event.target;
    console.log(value)
    if (value === "userForm") {
      this.setState({ buttonClicked: "userForm" })


    } if (value === "itemForm") {
      this.setState({buttonClicked: "itemForm"})

    }
  };

  expandUser = id => {
        API.getUser(id)
      .then(res => {
        this.setState({chosenUser: res.data })
         })
    .catch(err => console.log(err));

  }

  checkIfItemExsist = () => {

  }

  render() {


    return (
      <div className="App">
        <Layout>

          <div className="cd-fixed-bg cd-fixed-bg--6">To</div>
        

          <div style={{background: "#999966"}}>
            <ToggleButtons
              handleClick={this.handleClick}
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
      

        <div className="cd-fixed-bg cd-fixed-bg--5">Welcome</div>
       

        <Cards
            user={this.state.user}
            removeUser={this.removeUser}
            expandUser={this.expandUser}
            className="cd-fixed-bg cd-fixed-bg--3"
         />
          



            <div className="cd-fixed-bg cd-fixed-bg--7">You</div>

          {this.state.chosenUser.name  ?
              <DataMap
                className="cd-fixed-bg cd-fixed-bg--8" 
                chosenUser={this.state.chosenUser}
              /> : null }

          {!this.state.chosenUser.items === "null" > 0  ?
              <DataMapItems
                removeItem={this.removeItem}
                className="cd-fixed-bg cd-fixed-bg--8" 
                chosenUser={this.state.chosenUser}
                handleBudgetChange={this.handleBudgetChange}
              /> :  
              <h4>There are no items that need to be purchased at this time.</h4> 
            }


      
      </Layout>
    </div>
    );
  }
}

export default HomePage;


           // 


        //    
        //   


