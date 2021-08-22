const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
const PORT = process.env.port || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(multer().any())

const Router = require("./src/routes")();
const models = require('./src/models');
// Router.post('/api/upload', async (req, res) => {
//     const pmlObject = await functionPml.read(models, (req.files[0].buffer).toString('utf8'));
//     res.send(pmlObject);    
// });

// Router.post('/api/textarea', (req, res) => {

// });

// Router.get('/api/orders', (req, res) => {

// });

// Router.get('/', (req, res) => {
//     res.send('Index are called!!')
// })

// Loaders
app.use(Router);


app.listen(PORT, () => {
    console.log(`server listening to port ${PORT}`)
})