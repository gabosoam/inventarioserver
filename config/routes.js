/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },




  'POST /login': function (req, res) {
    var body = req.body;
    Usuario.findOne({ nombre: body.nombre }).exec(function (err, usuario) {
      if (err) {
        return res.serverError(err);
      }
      if (!usuario) {
        return res.notFound('No existe el usuario');
      }

      if (usuario.contrasena != body.contrasena) {
        return res.notFound('Contraseña incorrecta');
      }

      req.session.me = usuario.id;
      return res.ok({ id: usuario });
    });


  },


  '/lista': function (req, res) {
    var codigo = req.query.codigo;

    Producto.query('SELECT * FROM lista where codigo=?', codigo, function (error, data) {
      if (error) {
        return res.notFound('Producto no encontrado');
      } else {
        return res.ok(data);
      }
    })
    

  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
