const express = require('express')
const bodyParser =require('body-parser');
const cors =require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()


const app = express()

app.use(bodyParser.json());
app.use(cors());


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
});         
    
                

                // Respond to POST request on the root route (/), the application’s home page:
                
                // app.post('/', function (req, res) {
                //     res.send('Got a POST request')
                // })
                // Respond to a PUT request to the /user route:
                
                // app.put('/user', function (req, res) {
                //     res.send('Got a PUT request at /user')
                // })
                // Respond to a DELETE request to the /user route:
                
                // app.delete('/user', function (req, res) {
                //     res.send('Got a DELETE request at /user')
                // })






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})