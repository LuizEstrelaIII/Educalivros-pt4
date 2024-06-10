CREATE TABLE pessoa (
    id_pessoa INTEGER PRIMARY KEY,
    nome VARCHAR(255),
    cpf VARCHAR(20),
    email VARCHAR(255),
    endereco VARCHAR(255),
    data_nascimento DATE,
    telefone VARCHAR(20)
);

CREATE TABLE cliente (
    id_cliente INTEGER PRIMARY KEY,
    fk_id_pessoa INTEGER,
    FOREIGN KEY (fk_id_pessoa) REFERENCES pessoa(id_pessoa)
);

CREATE TABLE funcionario (
    id_funcionario INTEGER PRIMARY KEY,
    carga_horaria INTEGER,
    valor_por_hora DECIMAL(10, 2),
    turno VARCHAR(50),
    departamento VARCHAR(100),
    setor VARCHAR(100),
    fk_id_pessoa INTEGER,
    FOREIGN KEY (fk_id_pessoa) REFERENCES pessoa(id_pessoa)
);

CREATE TABLE professor (
    id_professor INTEGER PRIMARY KEY,
    dept_academico VARCHAR(100),
    titulacao VARCHAR(100),
    especialidade VARCHAR(100),
    fk_id_pessoa INTEGER,
    FOREIGN KEY (fk_id_pessoa) REFERENCES pessoa(id_pessoa)
);

CREATE TABLE aluno (
    id_aluno INTEGER PRIMARY KEY,
    matricula VARCHAR(50),
    email_institucional VARCHAR(255),
    ano_escolar VARCHAR(50),
    fk_id_pessoa INTEGER,
    FOREIGN KEY (fk_id_pessoa) REFERENCES pessoa(id_pessoa)
);

CREATE TABLE pedido (
    id_pedido INTEGER PRIMARY KEY,
    data_pedido DATE,
    data_pagamento DATE,
    metodo_pagamento VARCHAR(50),
    valor_total DECIMAL(10, 2),
    endereco_entrega VARCHAR(255),
    codigo_rastreamento VARCHAR(100),
    status_pedido VARCHAR(50),
    status_pagamento VARCHAR(50),
    status_entrega VARCHAR(50),
    data_entrega DATE,
    fk_id_cliente INTEGER,
    FOREIGN KEY (fk_id_cliente) REFERENCES cliente(id_cliente)
);

CREATE TABLE produto (
    id_produto INTEGER PRIMARY KEY,
    nome VARCHAR(100),
    descricao VARCHAR(255),
    preco_unitario DECIMAL(10, 2),
    quantidade INTEGER,
    categoria VARCHAR(100),
    quantidade_minima INTEGER
);

CREATE TABLE fornecedor (
    id_fornecedor INTEGER PRIMARY KEY,
    endereco VARCHAR(255),
    nome_fantasia VARCHAR(100),
    telefone VARCHAR(20)
);

CREATE TABLE editora (
    id_editora INTEGER PRIMARY KEY,
    endereco VARCHAR(255),
    email VARCHAR(255),
    telefone VARCHAR(20),
    nome VARCHAR(255)
);

CREATE TABLE biblioteca (
    id_biblioteca INTEGER PRIMARY KEY,
    nome VARCHAR(255),
    endereco VARCHAR(255)
);

CREATE TABLE livro (
    id_livro INTEGER PRIMARY KEY,
    genero VARCHAR(50),
    titulo VARCHAR(255),
    setor VARCHAR(50),
    disponivel BOOLEAN,
    fk_id_editora INTEGER,
    fk_id_biblioteca INTEGER,
    FOREIGN KEY (fk_id_editora) REFERENCES editora(id_editora),
    FOREIGN KEY (fk_id_biblioteca) REFERENCES biblioteca(id_biblioteca)
);

CREATE TABLE autor (
    id_autor INTEGER PRIMARY KEY,
    email VARCHAR(255),
    telefone VARCHAR(20),
    nome VARCHAR(255),
    data_nascimento DATE,
    data_falecimento DATE
);

CREATE TABLE disciplina (
    id_disciplina INTEGER PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE aula (
    id_aula INTEGER PRIMARY KEY,
    horario TIME,
    dia_da_semana VARCHAR(20),
    fk_id_disciplina INTEGER,
    FOREIGN KEY (fk_id_disciplina) REFERENCES disciplina(id_disciplina)
);

CREATE TABLE turma (
    id_turma INTEGER PRIMARY KEY,
    ano_escolar VARCHAR(50)
);

CREATE TABLE sala (
    id_sala INTEGER PRIMARY KEY,
    capacidade_maxima INTEGER,
    numero INTEGER,
    bloco VARCHAR(20),
    fk_id_biblioteca INTEGER,
    FOREIGN KEY (fk_id_biblioteca) REFERENCES biblioteca(id_biblioteca)
);

CREATE TABLE avaliacao (
    id_avaliacao INTEGER PRIMARY KEY,
    pontuacao DECIMAL(10, 2),
    nome VARCHAR(100),
    fk_id_professor INTEGER,
    FOREIGN KEY (fk_id_professor) REFERENCES professor(id_professor)
);

CREATE TABLE mensalidade (
    id_mensalidade INTEGER PRIMARY KEY,
    data_de_liberacao DATE,
    data_de_vencimento DATE,
    valor_liquido DECIMAL(10, 2),
    valor_bruto DECIMAL(10, 2),
    desconto DECIMAL(10, 2),
    fk_id_aluno INTEGER,
    FOREIGN KEY (fk_id_aluno) REFERENCES aluno(id_aluno)
);

CREATE TABLE emprestimo (
    id_emprestimo INTEGER PRIMARY KEY,
    fk_id_cliente INTEGER,
    fk_id_livro INTEGER,
    valor_multa DECIMAL(10, 2),
    data_realizada DATE,
    data_limite_devolucao DATE,
    FOREIGN KEY (fk_id_cliente) REFERENCES cliente(id_cliente),
    FOREIGN KEY (fk_id_livro) REFERENCES livro(id_livro)
);
