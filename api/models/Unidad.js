/**
 * Unidad.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: { type: 'integer', primaryKey: true, autoIncrement: true },

    nombre: { type: 'string' },

    productos: { collection: 'producto', via: 'unidad' },

    esDecimal: { type: 'string', enum: ['si', 'no'] }
  }
};

