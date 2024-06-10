module.exports = {
    tableName: 'turma',
    primaryKey: 'turma_id',
    attributes: {
      turma_id: {
        type: 'number',
        autoIncrement: true,
        columnName: 'turma_id',
        unique: true
      },
      ano_escolar: {
        type: 'string',
        columnName: 'ano_escolar',
        required: true
      }
    }
  };
  