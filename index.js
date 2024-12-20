const express=require('express')
const cors=require('cors')
const jwt = require('jsonwebtoken');
require('dotenv').config()
const cookiePerser=require('cookie-parser')

const port=5000;

const app=express()

const corsOption={
  origin:"http://localhost:5173",
  credentials: true,
  optionsSuccessStatus: 200
}

app.use(cors(corsOption))
app.use(express.json())
app.use(cookiePerser())




app.get('/', (req, res) => {
    res.send('running your server')
  })
  const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = `mongodb+srv://${process.env.SECRET_KEY}:${process.env.SECRET_PASS}@cluster0.vmhty.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  
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
      // await client.connect();
      const userCollection=client.db('Beauty-product').collection('users')




      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      // await client.close();
    }
  }
  run().catch(console.dir);
  

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })