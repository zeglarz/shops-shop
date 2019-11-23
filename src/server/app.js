var express = require('express')
var cors = require('cors');
var app = express()
app.use(cors());

const products = [{
    name: 'Kominiara',
    price: 123456,
    description: `
        ja to pier**** sciągam kominiare!
        `,
    imageURL: 'https://i.ytimg.com/vi/xiuZ6wPaXBc/maxresdefault.jpg',
    id: 'sda332'
},
    {
        name: 'Maczeta',
        price: 123,
        description: `
        Idealnie ostra, świetna do uciszania delikwentów!
        `,
        imageURL: 'https://www.militaria.pl/upload/wysiwyg/gfx/produkty/noze/ColdSteel/97KMSZ/Maczeta-Cold-Steel-Kukri-Machete.jpg',
        id: 'dasd333'
    }];

app.get('/products', function (req, res) {
    return res.json(products);
})


const runServer = (port) => {
    console.log(`Server is running on port ${port}`);
    app.listen(port);

};

module.exports = { runServer }; //strukturyzacja, czyli przeciwieństwo destrukturyzacji