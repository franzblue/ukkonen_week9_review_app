const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 5000;

const foodRouter =require('./routes/food_route');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/food', foodRouter);

app.listen(port, () => {
    console.log("up and running on port: ", port);
});

