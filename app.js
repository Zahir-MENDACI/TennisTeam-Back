require('dotenv').config();
require('./services/mongoose.service');

const express = require("express");
const app = express();
const apiRouter = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

    
const port = process.env.PORT;

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', apiRouter);

app.listen(port, (req, res) => {
    console.log(`Server Started at PORT ${port}`);
    });


