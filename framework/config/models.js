module.exports = {
  tableName: 'pedido',
  primaryKey: 'pedido_id',

  migrate: 'alter',
  datastore: 'default',
  
  attributes: {
    pedido_id: {
      type: 'number',
      autoIncrement: true,
      columnName: 'pedido_id',
      unique: true,
      required: true
    },
    data_pedido: {
      type: 'string',
      columnName: 'data_pedido',
      required: true
    },
    data_pagamento: {
      type: 'string',
      columnName: 'data_pagamento',
      required: true
    },
    metodo_pagamento: {
      type: 'string',
      columnName: 'metodo_pagamento',
      required: true
    },
    valor_total: {
      type: 'number',
      columnName: 'valor_total',
      required: true
    },
    endereco_entrega: {
      type: 'string',
      columnName: 'endereco_entrega',
      required: true
    },
    codigo_rastreamento: {
      type: 'string',
      columnName: 'codigo_rastreamento',
      required: true
    },
    status_pedido: {
      type: 'string',
      columnName: 'status_pedido',
      required: true
    },
    status_pagamento: {
      type: 'string',
      columnName: 'status_pagamento',
      required: true
    },
    status_entrega: {
      type: 'string',
      columnName: 'status_entrega',
      required: true
    },
    data_entrega: {
      type: 'string',
      columnName: 'data_entrega',
      required: true
    },
    fk_cliente_id: {
      type: 'number',
      columnName: 'fk_cliente_id',
      required: true
    }
  },
  // Disable automatic timestamp attributes
  autoCreatedAt: false,
  autoUpdatedAt: false
};
