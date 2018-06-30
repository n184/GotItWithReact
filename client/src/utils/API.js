import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },

  deleteItem: function(userid, itemid) {
    return axios.delete("/api/users/" + userid + "/items/" + itemid);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },


  updateUser: function(id, userData) {
    console.log(userData, "userData")
    return axios.put("/api/users/" + id, userData);
  },

  updateBudget: function(id, userData) {
    console.log(id, "id")
    console.log(userData, "userData")
    return axios.put("/api/users/" + id + "/budget", userData );
  }


};