module.exports = {
    tableName: 'editora',
    primaryKey: 'editora_id',
    attributes: {
      editora_id: {
        type: 'number',
        autoIncrement: true,
        columnName: 'editora_id',
        unique: true
      },
      endereco: {
        type: 'string',
        columnName: 'endereco',
        required: true
      },
      email: {
        type: 'string',
        columnName: 'email',
        required: true
      },
      telefone: {
        type: 'string',
        columnName: 'telefone',
        required: true
      },
      nome: {
        type: 'string',
        columnName: 'nome',
        required: true
      }
    }
  };
  