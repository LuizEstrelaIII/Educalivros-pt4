-- Criando um user gerente que vai ter acesso completo a todas as tabelas
CREATE USER 'usuario_gerente'@'localhost' IDENTIFIED BY 'senha_segura';
GRANT SELECT, INSERT, UPDATE, DELETE ON educaLivros.* TO 'usuario_gerente'@'localhost';

-- Criando um user vendedor que tem permissão de selecionar e inserir dados
CREATE USER 'usuario_vendedor'@'localhost' IDENTIFIED BY 'senha_segura';
GRANT SELECT, INSERT ON educaLivros.* TO 'usuario_vendedor'@'localhost';

-- Revogando privilégios de DELETE e UPDATE para vendedor
REVOKE DELETE, UPDATE ON educaLivros.* FROM 'usuario_vendedor'@'localhost';

-- Criando um user estoque que tem permissão de selecionar e atualizar a tabela produto
CREATE USER 'usuario_estoque'@'localhost' IDENTIFIED BY 'senha_segura';
GRANT SELECT ON educaLivros.produto TO 'usuario_estoque'@'localhost';
GRANT UPDATE ON educaLivros.produto TO 'usuario_estoque'@'localhost';

-- Revogando privilégios de INSERT e DELETE para estoque
REVOKE INSERT, DELETE ON educaLivros.produto FROM 'usuario_estoque'@'localhost';

-- Criando um user financeiro que tem permissão de selecionar e atualizar a tabela pedido
CREATE USER 'usuario_financeiro'@'localhost' IDENTIFIED BY 'senha_segura';
GRANT SELECT ON educaLivros.pedido TO 'usuario_financeiro'@'localhost';
GRANT UPDATE ON educaLivros.pedido TO 'usuario_financeiro'@'localhost';


REVOKE INSERT, DELETE ON educaLivros.pedido FROM 'usuario_financeiro'@'localhost';
