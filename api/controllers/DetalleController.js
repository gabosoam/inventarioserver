/**
 * DetalleController
 *
 * @description :: Server-side logic for managing detalles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `DetalleController.id()`
   */
  id: function (req, res) {
    return res.json({
      todo: 'id() is not implemented yet!'
    });
  },

  obtenerDetalle(req, res){
    var factura = req.query.factura;
    Detalle.query('SELECT * FROM vistadetalle2 WHERE factura = ?',factura , function(err, rawResult) {
      if (err) {
        console.log(err)
      } else {
        return res.json(rawResult);
      }
      
    });
  },


  /**
   * `DetalleController.factura()`
   */
  factura: function (req, res) {
    return res.json({
      todo: 'factura() is not implemented yet!'
    });
  },


  /**
   * `DetalleController.cantidad()`
   */
  cantidad: function (req, res) {
    return res.json({
      todo: 'cantidad() is not implemented yet!'
    });
  },


  /**
   * `DetalleController.producto()`
   */
  producto: function (req, res) {
    return res.json({
      todo: 'producto() is not implemented yet!'
    });
  },


  /**
   * `DetalleController.precio()`
   */
  precio: function (req, res) {
    return res.json({
      todo: 'precio() is not implemented yet!'
    });
  }
};

