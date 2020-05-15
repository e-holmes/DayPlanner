const mongoose = require("mongoose");
const db = require("../models");

// This file empties the user collection and inserts the books below

mongoose.connect( process.env.MONGODB_URI ||"mongodb://localhost/DayPlanner" , () => {
  console.log('connecting Seed to database')
})



const userSeed = [
  {
    userName: "rayhe",
    password: "123456",
    email: "rayhe@gmail.com"
  },
  {
    userName : "shree",
    password : "12345",
    email : " shre@yahoo.com"
  }
]

