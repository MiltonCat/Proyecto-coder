const express = require ('express');
const app = express();
const path = require('path');


//Ajustes
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//Middelwares


//Routes
app.use(require('./routes/index'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));





//escuchando al servidor
app.listen(3000, () => {
    console.log('server on port', app.get('port'));
});
