module.exports = {
    attributes: {
      id: {
        type: 'number',
        autoIncrement: true,
        columnName: 'id',
        unique: true
      },
      name: {
        type: 'string',
        required: true,
        columnName: 'name'
      },
      email: {
        type: 'string',
        required: true,
        unique: true,
        columnName: 'email'
      },
      age: {
        type: 'number',
        columnName: 'age'
      }
    },
    primaryKey: 'id',
    tableName: 'User'
  };
  