const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// HTTP LOGGER
// app.use(morgan('combined'))

// CHANGE HANDLESBAR EXTENSION NAME
app.engine('hbs', handlebars.engine({
    extname: '.hbs' 
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/search', (req, res) => {
    res.render('search');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.post('/search', (req, res) => {
    console.log(req.body.gender);
    res.render('search');
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));   










