const express = require ('express');
const morgan = require ('morgan');
const app = express();
const path = require('path');





//Ajustes
app.set('port',process.env.PORT|| 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs', 'pug');


//Setting

//Middelwares
app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use(require('./routes/index'));


//Static Files
app.use(express.static(path.join(__dirname, 'public')));






//escuchando al servidor
app.listen(3000, () => {
    console.log('server on port', app.get('port'));
});