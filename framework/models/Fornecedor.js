module.exports = {
    tableName: 'fornecedor',
    primaryKey: 'fornecedor_id',
    attributes: {
      fornecedor_id: {
        type: 'number',
        autoIncrement: true,
        columnName: 'fornecedor_id',
        unique: true
      },
      endereco: {
        type: 'string',
        columnName: 'endereco',
        required: true
      },
      nome_fantasia: {
        type: 'string',
        columnName: 'nome_fantasia',
        required: true
      },
      telefone: {
        type: 'string',
        columnName: 'telefone',
        required: true
      }
    }
  };
  