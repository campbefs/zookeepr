const express = require('express');
const PORT = process.env.PORT || 3001; // that's an OR statement 
const app = express();
const { animals } = require('./data/animals');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// MIDDLEWARE - parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// style sheet middleware
app.use(express.static('public'));

// import routes -- must come AFTER style sheet
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);





// app.listen(3001, () => {
//   console.log('API server now on port 3001!');
// });

// // hosting main html page
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

// // hosting animals html page
// app.get('/animals', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/animals.html'));
// });

// // hosting zookeepers webpage
// app.get('/zookeepers', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/zookeepers.html'));
// });

// // wildcard route
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });




// app.listen should always be last
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`)
});


