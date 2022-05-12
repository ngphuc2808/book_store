const express = require('express');
const app = express();
const port = 3000

app.set('view engine', 'ejs');
app.set('views', './views');

app.use("/public", express.static(__dirname + "/public"));

app.get('/HomePage', (req, res) => {
    res.render('HomePage.ejs');
})

app.get('/Admin', (req, res) => {
  res.render('Admin.ejs');
})

app.get('/User', (req, res) => {
  res.render('FormUserProfile.ejs');
})

app.get('/Product', (req, res) => {
  res.render('FormDetailProduct.ejs');
})

app.get('/Category', (req, res) => {
  res.render('FormProductCategory.ejs');
})

app.get('/Writter', (req, res) => {
  res.render('FormWritterProduct.ejs');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})