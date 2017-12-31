/**
 * Cliente.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id : { type: 'integer', primaryKey: true, autoIncrement: true },

    cedula : { type: 'string', unique:true },

    nombre : { type: 'string' },

    direccion : { type: 'string' },

    telefono : { type: 'string' },

    email : { type: 'string' },

    facturas: {collection: 'factura', via : 'cliente'}
  }
};

