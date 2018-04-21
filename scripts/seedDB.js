const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/project3",
  {
    useMongoClient: true
  }
);

const jornalSeeds = [
  {
    title: "My Very First Jornal Entery",
    author: "Bezawit Teferi",
    Journals:
      'Today is 04/14/18 and Its very warm outside. I am very excited to be near the end of this Boot Camp and to Be able to start the next Chapter of my life which is to get my Certification in Sharepoint Adminstration/ Sharepoint development. For the Past Year I have been working very hard to learn Web devlopment Processes and now It is time for me to work on my certification.',
    date: new Date(Date.now())
  }
];

db.Jornal
  .remove({})
  .then(() => db.Jornal.collection.insertMany(jornalSeeds))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
