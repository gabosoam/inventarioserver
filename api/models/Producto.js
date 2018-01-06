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

    nombre : { type: 'string' },

    unidad : { type: 'string' },

    precio : { type: 'float' },

    estado : { type: 'string' },

    categoria : {model: 'categoria'},

    stock: {type : 'float'},

    minimo: {type : 'float'},

    tipo : { type: 'string', enum: ['unidad', 'granel'] },

    marca : {model: 'marca' },

    

    detalles: {collection: 'detalle', via: 'factura'}

    

  }
};

