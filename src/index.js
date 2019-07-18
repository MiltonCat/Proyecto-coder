require('dotenv').config();
const express = require ('express');
const morgan = require ('morgan');
const cors = require('cors');
const app = express();
const path = require('path');
const productsApiRouter = require('./routes/api/products');

const index= require('./index.js');
require('./databases');


app.use("/api/products", productsApiRouter);

//Ajustes
app.set('port',process.env.PORT|| 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs', 'pug');





//Middelwares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Routes
app.use(require('./routes/index'));
app.use("/api/products", productsApiRouter);



//Static Files
app.use(express.static(path.join(__dirname, 'public')));


//escuchando al servidor
  async function main(){
  await app.listen(3000, () => {
    console.log(`server on port ${app.get('port')}`);
  });
}
main();
