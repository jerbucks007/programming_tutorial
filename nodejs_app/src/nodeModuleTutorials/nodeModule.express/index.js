import express /*,{Router}*/ from 'express';
import path from 'path';
import router from './router';
import middleware from './middleware'; 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')));

// middleware init
app.use('/api/employees/:id', middleware().logger);

// router set up
app.use('/', router);

app.listen(5000, () => console.log(`Server running on port: ${PORT}`))