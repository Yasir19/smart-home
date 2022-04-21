const db = require("../config/connection");
const {User, Createproject} = require("../models");
const contractorData = require('./contractorData.json');
const newProjectData =require("./newProjectData.json")

db.once("open", async () => {
  await User.deleteMany({});
  await Createproject.deleteMany({});

   // bulk create each model
   const user = await User.insertMany(contractorData);
   const project =await Createproject.insertMany(newProjectData)
  console.log("all done!");
  process.exit(0);
});
