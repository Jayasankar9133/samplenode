const express = require('express');

const app = express();

app.listen(3200, () => {
    console.log("Server running")
});

app.get('/', (req, res) => {
    res.send('<h1>Hello Jio</h1>');
});