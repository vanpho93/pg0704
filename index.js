const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const { getAllProduct, insertProduct } = require('./db');

const parser = bodyParser.urlencoded({ extended: false });
const app = express();
app.listen(3000, () => console.log('Server started'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/admin', (req, res) => {
    getAllProduct((err, rows) => {
        if (err) return res.send('LOI' + err);
        res.render('admin', { mang: rows })
    });
});
