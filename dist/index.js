"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('dotenv').config();

var express = require('express');

var morgan = require('morgan');

var cors = require('cors');

var app = express();

var path = require('path');

var productsApiRouter = require('./routes/api/products');

var index = require('./index.js');

app.use("/api/products", productsApiRouter); //Ajustes

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs', 'pug'); //Middelwares

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json()); //Routes

app.use(require('./routes/index'));
app.use("/api/products", productsApiRouter); //Static Files

app.use(express["static"](path.join(__dirname, 'public'))); //escuchando al servidor

function main() {
  return _main.apply(this, arguments);
} //404 Not Found


function _main() {
  _main = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return app.listen(3000, function () {
              console.log("server on port ".concat(app.get('port')));
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}

app.use(function (req, res, next) {
  res.status(404).send('404 Not Found');
});
main();