/**
 * ProductoController
 *
 * @description :: Server-side logic for managing productoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `ProductoController.id()`
   */
  id: function (req, res) {
    return res.json({
      todo: 'id() is not implemented yet!'
    });
  },


  /**
   * `ProductoController.nombre()`
   */
  nombre: function (req, res) {
    return res.json({
      todo: 'nombre() is not implemented yet!'
    });
  },


  /**
   * `ProductoController.precio()`
   */
  precio: function (req, res) {
    return res.json({
      todo: 'precio() is not implemented yet!'
    });
  },


  /**
   * `ProductoController.tipo()`
   */
  tipo: function (req, res) {
    return res.json({
      todo: 'tipo() is not implemented yet!'
    });
  },

  modificarStock(req, res){

    console.log('hola');
    var id = req.query.id;
    var stock = req.query.stock;
    Producto.query('UPDATE producto SET producto.stock=producto.stock+? WHERE producto.id=?',[stock,id ], function(err, rawResult) {
      if (err) {
        console.log(err)
      } else {

        console.log(rawResult)


        return res.json(rawResult);
      }
      
    });
  },
};

