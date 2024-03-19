var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // O   res.send('Hola soy la pagina de promociones ...');
         res.render('promociones'); // view/promociones.hbs
});

module.exports = router;
