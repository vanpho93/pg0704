const express = require('express');
const bodyParser = require('body-parser');

const { getAllProduct, insertProduct,removeProduct } = require('./db');

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

app.post('/admin/addProduct', parser, (req, res) => {
    const { name, desc, image, idVideo } = req.body;
    insertProduct(name, desc, image, idVideo, err => {
        if (err) return res.send('CO LOI');
        res.redirect('/admin');
    });
});

app.get('/admin/xoa/:id', (req, res) => {
    const { id } = req.params;
    removeProduct(id, err => {
        if (err) return res.send('CO LOI');
        res.redirect('/admin');
    });
});

//https://github.com/hongocnhan/yunstore_demo