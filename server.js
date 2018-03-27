const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send("Hello Express!");
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    })
})

app.listen(3000);