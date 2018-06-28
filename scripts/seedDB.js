const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/i-got-it",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
    name: "Morty",
    overAllBudget: 678,
    date: new Date(Date.now()),
    items: 
      [
         {
            description: "Tie",
            quantity: 3,
            price: 50
         },
         {
            description: "Shoes",
            quantity: 3,
            price: 150
         }
      ],
  },
  {
    name: "Yarra",
    overAllBudget: 2353,
    date: new Date(Date.now()),
    items: 
          [
             {
                description: "Flip-flop",
                quantity: 4,
                price: 65
             },
             {
                description: "Shorts",
                quantity: 2,
                 price: 45
              }
           ]
    }


 
];

db.users
  .remove({})
  .then(() => db.users.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
