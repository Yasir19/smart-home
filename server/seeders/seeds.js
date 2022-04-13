const db = require("../config/connection");
const { Contractor, User, Createproject} = require("../models");
const contractorData = require('./contractorData.json');
const newProjectData =require("./newProjectData.json")

db.once("open", async () => {
  await Contractor.deleteMany({});
  await Createproject.deleteMany({});

   // bulk create each model
   const contractor = await Contractor.insertMany(contractorData);
   const project =await Createproject.insertMany(newProjectData)
  console.log("all done!");
  process.exit(0);
});
