const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();
const routes = require('./Router/routes');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

const database_url = process.env.MONGO_URI;
console.log(database_url);


const connectToDb = (cb) => {
  mongoose
    .connect(`${database_url}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      cb(null);
    })
    .catch((err) => {
      console.error("Error connecting to the database:", err);
      cb(err);
    });
};

const getDb = () => mongoose.connection;

app.use("/", routes);

connectToDb((err) => {
  if (err) {
    console.error("Error occurred while connecting to the database:", err);
    return;
  }
  console.log("Connected successfully to the database");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
