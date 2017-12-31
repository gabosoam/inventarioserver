/**
 * Producto.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id : { type: 'integer', primaryKey:true, autoIncrement: true },

    codigo : { type: 'string', unique: true },

    nombre : { type: 'string', unique: true },

    precio : { type: 'float' },

    stock: {type : 'float'},

    tipo : { type: 'string', enum: ['unidad', 'granel'] },

    marca : {model: 'marca' },

    categoria : {model: 'categoria'},

    detalles: {collection: 'detalle', via: 'factura'}

    

  }
};

