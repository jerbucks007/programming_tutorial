//import express, { Router } from 'express';
const express = require('express')
const { Router } = require('express');
const staticServe = require('serve-static');

const app = express();
const routes = Router();

const PORT = process.env.PORT || 3001;

console.log(__dirname + '/views')

routes.get('/api/employees', (req, res) => {
    const employees = [
        {name: 'Jerard Joseph', position: 'Developer' },
        {name: 'Krizia', position: 'Developer' },
        {name: "Clark Can't", position: 'Comedian' },
    ]
    res.send(employees);
})

routes.get('/', (req, res) => {
    console.log('got it')
    res.redirect('/index.html')
})

app.use(routes);
app.use(staticServe(__dirname + '/public'));

app.listen(PORT, () => {
    console.log(`Running at port ${PORT}`);
})