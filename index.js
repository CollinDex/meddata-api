const express = require('express');
const mongoose = require('mongoose');
const Patient = require('./models/patient.model');
const app = express();
const patientRoute = require('./routes/patient.route');

// middleware
app.use(express.json()); //Enable use of JSON
app.use(express.urlencoded({extended:false})); //Enable use of urlform


// routes
app.use('/api/patients', patientRoute);

// API GET
app.get('/', (req, res) => {
  res.send('Hello From Node Api');
});

const uri = process.env.DB_CREDENTIALS;

//Connect mongodb using moongoose
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to db!');
    //Initialize server to listen for requests
    app.listen(3000, () => {
      console.log('Server is runing on port 3000');
    });
  })
  .catch(() => {
    console.log('Failed to Connect');
  }
);