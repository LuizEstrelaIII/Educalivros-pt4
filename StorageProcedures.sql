DELIMITER //

CREATE PROCEDURE total_vendas_livro(IN livroID INT, OUT total DECIMAL(10, 2))
BEGIN
    SELECT SUM(p.valor_total) INTO total
    FROM pedido p
    JOIN inclui_prod ip ON p.id_pedido = ip.fk_id_pedido
    WHERE ip.fk_id_produto = livroID;
END //

CREATE PROCEDURE atualizar_estoque_produto(IN produtoID INT, IN quantidade INT)
BEGIN
    UPDATE produto
    SET quantidade = quantidade + quantidade
    WHERE id_produto = produtoID;
END //

CREATE PROCEDURE inserir_cliente(IN nome VARCHAR(255), IN email VARCHAR(255), IN telefone VARCHAR(20), IN endereco VARCHAR(255), IN cpf VARCHAR(20))
BEGIN
    DECLARE novo_id INT;
    
    INSERT INTO pessoa (nome, email, telefone, endereco, cpf)
    VALUES (nome, email, telefone, endereco, cpf);
    
    SET novo_id = LAST_INSERT_ID();
    
    INSERT INTO cliente (fk_id_pessoa)
    VALUES (novo_id);
END //

CREATE PROCEDURE atualizar_pedido(IN pedidoID INT, IN novo_status VARCHAR(50), IN nova_data_entrega DATE)
BEGIN
    UPDATE pedido
    SET status_pedido = novo_status, data_entrega = nova_data_entrega
    WHERE id_pedido = pedidoID;
END //

DELIMITER ;
