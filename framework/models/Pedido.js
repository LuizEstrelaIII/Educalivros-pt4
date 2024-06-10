// api/models/Pedido.js
module.exports = {
  primaryKey: 'pedido_id',

  attributes: {
    pedido_id: {
      type: 'number',
      autoIncrement: true,
      unique: true,
      columnName: 'pedido_id'
    },
    data_pedido: {
      type: 'string',
      columnType: 'date'
    },
    data_pagamento: {
      type: 'string',
      columnType: 'date'
    },
    metodo_pagamento: {
      type: 'string'
    },
    valor_total: {
      type: 'number'
    },
    endereco_entrega: {
      type: 'string'
    },
    codigo_rastreamento: {
      type: 'string'
    },
    status_pedido: {
      type: 'string'
    },
    status_pagamento: {
      type: 'string'
    },
    status_entrega: {
      type: 'string'
    },
    data_entrega: {
      type: 'string',
      columnType: 'date'
    },
    fk_cliente_id: {
      type: 'number'
    }
  }
};
