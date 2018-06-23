import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import './HomePage.css';
import  API from '../../utils/API';
import AddUserForm from '../../containers/AddUserForm/AddUserForm';
import AddItemForm from '../../containers/AddItemForm/AddItemForm';
import Cards from '../../components/Cards/Cards';


class HomePage extends Component {

    state = 
      { 
        user: [], 
        addUser: {
          name: "",
          overAllBudget: 0
        }  
      };

  constructor (props) {
    super(props)

        this.setState({    user:
    [
        {
            name: "Maya",
            overallBudget: 300,
            items: 
                [
                    {
                        description: "Socks",
                        quantity: 1,
                        price: 10
                    }
                ],
        },
        {
            name: "Tim",
            overallBudget: 700,
            items: 
                [
                    {
                        description: "Underwear",
                        quantity: 5,
                        price: 25
                    }
                ],
        }
    ]})
  }

  componentDidMount() {
    this.loadUsers();
  };

    
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

      handleUserChange = event => {
    
console.log('handleInputChange', event)
    event.preventDefault();
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    let name = event.target.name;
       this.setState({
        user:[...this.state.user,
          [name]: value
        ]
      });
       console.log(this.state.user)
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



  render() {

    return (
      <div className="App">
      <Layout>
        <header className="App-header">
          <h1 className="App-title">Welcome to Got it</h1>
        </header>
        
        <AddUserForm 
            addUser={this.state.addUser}
            handleInputChange={this.handleAddUserChange}
            handleUserSubmit={this.handleUserSubmit}
            handleAddUser={this.handleAddUser}
            className="cd-fixed-bg cd-fixed-bg--4"/>
       
        <div className="cd-fixed-bg cd-fixed-bg--5">Welcome</div>
        <AddItemForm
            user={this.state.user}
            handleInputChange={this.handleUserChange}
            className="cd-fixed-bg cd-fixed-bg--2" />
        <div className="cd-fixed-bg cd-fixed-bg--6">To</div>
        <Cards user={this.state.user} className="cd-fixed-bg cd-fixed-bg--3" />
        <div className="cd-fixed-bg cd-fixed-bg--7">You</div>
        <div className="cd-fixed-bg cd-fixed-bg--1">!</div>
     </Layout>
      </div>
    );
  }
}

export default HomePage;