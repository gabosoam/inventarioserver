/**
 * Producto.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'integer', primaryKey: true, autoIncrement: true },
    codigo: { type: 'string', unique: true },
    nombre: { type: 'string' },
    unidad: { model: 'unidad' },
    precio: { type: 'float' },
    estado: { type: 'string' },
    categoria: { model: 'categoria' },
    stock: { type: 'float' },
    minimo: { type: 'float' },
    marca: { model: 'marca' },
    detalles: { collection: 'detalle', via: 'factura' },
    precios: { collection: 'precio', via: 'producto' }
  },

  beforeCreate(valores, callback) {
    valores.nombre = valores.nombre.toUpperCase().trim();
    callback();
  },

  beforeUpdate(valores, callback) {
    if (valores.nombre) {
      valores.nombre = valores.nombre.toUpperCase().trim();
      callback();
    }else{
      callback();
    } 
    
  },

  afterCreate: function (values, cb) {

    Unidad.findOne({ id: values.unidad }, function (err, unidad) {
      Precio.create({
        producto: values.id,
        unidad: unidad.nombre,
        precio: values.precio,
        tamano: 1
      }).exec(function (err, records) {
        cb();
      });
    })


  },
};

