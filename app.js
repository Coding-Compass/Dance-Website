const express = require('express');
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ContactDance');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const bodyparser = require("body-parser");
const path = require('path');
const app = express();
const port = 80;

// Database Related Stuff
var contactSchema = new mongoose.Schema({
    Name: String,
    Number: String,
    Email: String,
    Address: String,
    Age: String,
    Consern: String
  });

  const Contact = mongoose.model('Contact', contactSchema);

  app.post("/Contact-Us", (req, res)=>{
    var myData = new Contact(req.body);
    console.log(myData)
    myData.save().then(()=>{
    res.send("This item has been saved to the database")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")
})})

// EXPRESS SPECIFIC STUFF
// app.use(favicon(path.join(__dirname, 'static', 'LOGO.ico')))
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {};
    res.status(200).render('index.pug', params);
})
app.get('/Contact-Us', (req, res)=>{
    const params = {};
    res.status(200).render('contact.pug', params);
})
app.get('/Services', (req, res)=>{
    const params = {};
    res.status(200).render('services.pug', params);
})
app.get('/Classes', (req, res)=>{
    const params = {};
    res.status(200).render('classes.pug', params);
})
app.get('/About-us', (req, res)=>{
    const params = {};
    res.status(200).render('about.pug', params);
})
app.get('/sponser', (req, res)=>{
    const params = {};
    res.status(200).render('sponser.pug', params);
})


    // START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
