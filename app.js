const express = require('express');
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
