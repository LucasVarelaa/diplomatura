var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

router.get('/', async function (req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    novedades
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', { // agregar.hbs
    layout: 'admin/layout'
  })
});

router.post('/agregar', async (req, res, next) => {
  try {
      if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo) {
          await novedadesModel.insertNovedad(req.body);
          res.redirect("/admin/novedades");
      } else {
          res.render('admin/agregar', {
              layout: 'admin/layout',
              error: true,
              messages: 'Todos los campos son requeridos'
          })
      }
  } catch (error) {
      console.log(error);
      res.render('admin/agregar', {
          layout: 'admin/layout',
          error: true,
          messages: 'No se cargo la novedad'
      })
  }
})

// ELIMINAR UNA NOVEDAD
router.get('/eliminar/:id', async (req, res, next) => {
  const id = req.params.id;
  
  await novedadesModel.deleteNovedadesById(id);
  res.redirect('/admin/novedades');
});

// modificador: 1 paso > me traiga el diseño formulario + datos de esa novedades

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);

  var novedad = await novedadesModel.getNovedadById(id);

  res.render('admin/modificar', { //modificar.hbs donde me trae la info a traves de novedad
    layout: 'admin/layout',
    novedad
  })

});

// MODIFICAR NOVEDAD
router.post('/modificar', async (req, res, next) => {
  try {

    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    console.log(obj)

    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');

  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      messages: 'No se modifico la novedad'
    })
  }
})

module.exports = router