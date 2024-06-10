// api/models/Disciplina.js

module.exports = {
    tableName: 'disciplina',
    primaryKey: 'disciplina_id',
    attributes: {
      disciplina_id: {
        type: 'number',
        autoIncrement: true,
        columnName: 'disciplina_id',
        unique: true,
        required: true
      },
      nome: {
        type: 'string',
        columnName: 'nome',
        required: true
      }
    },
    datastore: 'default',
    migrate: 'alter'
  };
  