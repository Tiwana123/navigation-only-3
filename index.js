

const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const path = require('path');
const data = require("./src/data");



const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

// Set Templating Engine
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('layout', 'layouts/main'); // Specify the layout file



// Main Route
app.get('/', (req, res) => {
  res.render('index', {
    message: 'Hello from the index view!',
    levelPrefix: '',
    ...data,
  });
});



app.use((req, res, next) => {
  res.status(404).render('404', {
    title: 'Page Not Found',
    ...data,
    levelPrefix: '',
  });
});




app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
