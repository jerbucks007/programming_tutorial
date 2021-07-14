import express from 'express';
import path from 'path';
import serveStatic from 'serve-static';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('view options', { layout: false });
app.set('view cache', false);

// middleware
// express.static set the static folder
// __dirname value in this case is D:\apps\sample_app\src\nodeModuleTutorials\nodeModule.express
app.use(serveStatic(path.join(__dirname, 'public')));

/* ROUTE
 * req: access to params, query strings, url parts, everything about request, etc...
 * res: represent the http response 
 */
app.get('/about', (req, res) => {
    res.render('about', {title: 'ABOUT ME'});
});

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(5000, () => console.log(`server started on port 5000`));