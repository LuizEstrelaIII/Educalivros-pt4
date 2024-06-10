module.exports.routes = {
  'POST /pedido': 'PedidoController.create',
  'GET /pedido': 'PedidoController.find',
  'GET /pedido/:id': 'PedidoController.findOne',
  'PUT /pedido/:id': 'PedidoController.update',
  'DELETE /pedido/:id': 'PedidoController.destroy',

  
  'POST /aula': 'AulaController.create',
  'GET /aula': 'AulaController.find',
  'GET /aula/:id': 'AulaController.findOne',
  'PUT /aula/:id': 'AulaController.update',
  'DELETE /aula/:id': 'AulaController.destroy',

  'POST /turma': 'TurmaController.create',
  'GET /turma': 'TurmaController.find',
  'GET /turma/:id': 'TurmaController.findOne',
  'PUT /turma/:id': 'TurmaController.update',
  'DELETE /turma/:id': 'TurmaController.destroy',

  'POST /fornecedor': 'FornecedorController.create',
  'GET /fornecedor': 'FornecedorController.find',
  'GET /fornecedor/:id': 'FornecedorController.findOne',
  'PUT /fornecedor/:id': 'FornecedorController.update',
  'DELETE /fornecedor/:id': 'FornecedorController.destroy',

  'POST /editora': 'EditoraController.create',
  'GET /editora': 'EditoraController.find',
  'GET /editora/:id': 'EditoraController.findOne',
  'PUT /editora/:id': 'EditoraController.update',
  'DELETE /editora/:id': 'EditoraController.destroy',

  'POST /disciplina': 'DisciplinaController.create',
  'GET /disciplina': 'DisciplinaController.find',
  'GET /disciplina/:id': 'DisciplinaController.findOne',
  'PUT /disciplina/:id': 'DisciplinaController.update',
  'DELETE /disciplina/:id': 'DisciplinaController.destroy'

  
};
