const express = require('express');
const mongoose = require('mongoose');
const Patient = require('./models/patient.model');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello From Node Api');
});

app.post('/api/patients', async (req,res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

const uri = "mongodb+srv://admin:testdb@meddata-db.y4wbmps.mongodb.net/?retryWrites=true&w=majority&appName=meddata-db";

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



//Another way to connect

/* const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb+srv://admin:testdb@meddata-db.y4wbmps.mongodb.net/?retryWrites=true&w=majority&appName=meddata-db";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir); */