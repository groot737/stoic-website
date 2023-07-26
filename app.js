const express = require('express');
const app = express();
require('isomorphic-fetch');



app.use(express.static('public'));
app.use(express.static('views'))
app.set('view engine', 'ejs');

// index page
app.get('/', (req, res) => {
    res.render('index')
});

app.get('/quotes', (req,res) => {
  fetch('https://api.themotivate365.com/stoic-quote')
     .then(response => response.json())
     .then(data => {
      res.json(data)
     })
})

// 404 page
app.use((req, res) => {
  res.end('page not found');
});

app.listen(3000, () => {
  console.log('app listening on port 3000');
});