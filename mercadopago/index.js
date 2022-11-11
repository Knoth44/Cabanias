const express = require('express');
const http = require('http');
const cors = require('cors');
const app = express();
app.set('port', 3003);
app.use(cors({ origin: '*', }));

app.get('/generar', (req, res) => {

    let preference = {
        back_urls: {
            success: 'http://localhost:3003/success'
        },
        items: [

            {
                id: 123,
                title: 'Cabana 1 - 1 Persona',
                unit_price: 4000,
                currency_id: "ARS",
                quantity: 1,
            }
        ],
        //    notification_url: 'https://0bf9-190-112-96-118.sa.ngrok.io/notificar'
    };

    mercadopago.preferences
        .create(preference)
        .then(function (response) {
            console.log(response.body.init_point);
            // document.body.style.backgroundColor = 'green';
            res.send(`<a href="${response.body.init_point}" style='textDecoration:'none'>IR A PAGAR</a>`);
        })
        .catch(function (error) {
            console.log(error);
        });
});
app.get('/success', (req, res) => {
    res.send('TODO SALIO BIEN');
});
app.use('/notificar', (req, res) => {
    console.log('notificar')
    res.send();
});
const mercadopago = require('mercadopago');
const { cursorTo } = require('readline');
const { url } = require('inspector');
mercadopago.configure({
    access_token: "APP_USR-6100019545886072-110721-f6a936635f3a7682736319740da47259-1234118199",
})

//access_token=APP_USR-6100019545886072-110721-f6a936635f3a7682736319740da47259-1234118199

http.createServer(app).listen(app.get('port'), () => {
    console.log('* HTTP escuchando en puerto ' + app.get('port'));
});