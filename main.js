const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const routes = require('./routes/index');
const connectDB = require('./database/db');

app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(routes);

connectDB().then(() => {
    app.listen(PORT, (req, res) => {
        console.log(`Server is listening on at http://localhost:${PORT}`);
    });
});