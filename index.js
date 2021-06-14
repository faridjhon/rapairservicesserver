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


console.log(process.env.DB_USER)


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0ltwi.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("Repair").collection("services");
  // perform actions on the collection object
  client.close();
});



                            app.get('/service',(req , res) =>{
                                productCollection.find({})
                                .toArray((err , documents) => {
                                res.send(documents);
                                })
                            })


                app.get('/', function (req, res) {
                    res.send('Hello World!')
                })

                app.get('/', function (req, res) {
                    res.send('Hello World!')
                })

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




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})