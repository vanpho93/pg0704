const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const queryDB = require('./db');

const parser = bodyParser.urlencoded({ extended: false });
const app = express();
app.listen(3000, () => console.log('Server started'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/admin', (req, res) => {
    queryDB('SELECT * FROM "Product"', (err, result) => {
        if (err) return res.send('LOI' + err);
        res.render('admin', { mang: result.rows })
    });
});
