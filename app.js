const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

//PORT Number
const port = process.env.PORT || 8080;

//CORS Middleware 
app.use(cors()); //allow access of API from any domain, can set up specific domains to access
// Body Parser Middleware
app.use(bodyParser.json()); //parse incoming request: ie. forms..

//Set Static folder 
app.use(express.static(path.join(__dirname, 'public')));


//Index Route
app.get('/', (req, res)=>{
    res.send('Invalid Endpoint');
});

//any other route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Start Server
app.listen(port, () =>{
    console.log('Server started on port '+port);
 });