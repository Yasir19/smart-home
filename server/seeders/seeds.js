const db = require("../config/connection");
const { Contractor } = require("../models");
const contractorData = require('./contractorData.json');

db.once("open", async () => {
  await Contractor.deleteMany({});

   // bulk create each model
   const contractor = await Contractor.insertMany(contractorData);



  console.log("all done!");
  process.exit(0);
});
