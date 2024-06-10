module.exports = {
    attributes: {
      aula_id: {
        type: 'number',
        autoIncrement: true,
        unique: true,
        columnName: 'aula_id'
      },
      horario: {
        type: 'string',
        columnType: 'time',
        required: true
      },
      dia_da_semana: {
        type: 'string',
        required: true
      },
      fk_disciplina_id: {
        type: 'number',
        required: true
      }
    },
    primaryKey: 'aula_id',
    tableName: 'aula'
  };
  