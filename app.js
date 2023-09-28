const express = require('express');
const model = require('./model');
const router = require('./router');
const HOST = model.HOST;
const PORT = model.PORT;

const app = express();
app.use(express.static('public'));

app.use(router);

app.listen(PORT, (error) => {
    error? console.log(error) : console.log(`server started: http://localhost:${PORT}`);
});


app.use((req, res) => {
    res.status(404).send('Not Found');
});

app.use((error, req, res) => {
    res.status(500).send(error);
});