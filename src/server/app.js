var express = require('express')
var cors = require('cors');
var app = express();
const productsStore = require('./productsStore');
app.use(cors());


app.get ('/products', function (req, res) {
    return res.json(productsStore.getProducts());
});

app.get('/products/:id', function (req, res) {
    return res.json(productsStore.getProductById(req.params.id));
});

app.delete('/products/:id', function (req, res) {
    productsStore.deleteProductById(req.params.id, () => {
        res.json({});
    });
});

const runServer = (port) => {
    console.log(`Server is running on port ${port}`);
    app.listen(port);

};

module.exports = { runServer }; //strukturyzacja, czyli przeciwieństwo destrukturyzacji