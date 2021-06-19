const express = require('express')
const bodyParser =require('body-parser');
const cors =require('cors');
const fileUpload = require('express-fileupload');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()


const app = express()

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('image'));
app.use(fileUpload());


const port = 5000

//DB  


 console.log(process.env)

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hg2vz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


client.connect(err => {
  
  const serviceCollection = client.db("Repair").collection("services");
  const reviewCollection = client.db("Repair").collection("reviews");



  app.get('/services',(req , res) =>{
    serviceCollection.find({})
    .toArray((err , documents) => {
    res.send(documents);
    })
})

app.get('/reviews',(req , res) =>{
  reviewCollection.find({})
  .toArray((err , documents) => {
  res.send(documents);
  })
})
 
  app.post('/AddService',(req, res)=>{
    const service = req.body;
    serviceCollection.insertOne(service)
    .then(result =>{
      console.log(result);
    })
  })
  app.post('/AddReview',(req, res)=>{
    const review = req.body;
    reviewCollection.insertOne(review)
    .then(result =>{
      console.log(result);
    })
  })

});         


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})