DELIMITER //

CREATE TRIGGER atualizar_estoque AFTER INSERT ON inclui_prod
FOR EACH ROW
BEGIN
    UPDATE produto
    SET quantidade = quantidade - NEW.quantidade
    WHERE id_produto = NEW.fk_id_produto;
END //

CREATE TRIGGER verificar_estoque BEFORE INSERT ON inclui_prod
FOR EACH ROW
BEGIN
    DECLARE qtd_disponivel INT;
    
    SELECT quantidade INTO qtd_disponivel
    FROM produto
    WHERE id_produto = NEW.fk_id_produto;
    
    IF qtd_disponivel < NEW.quantidade THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Quantidade solicitada excede o estoque disponível';
    END IF;
END //

CREATE TRIGGER atualizar_data_modificacao BEFORE UPDATE ON produto
FOR EACH ROW
BEGIN
    SET NEW.data_modificacao = NOW();
END //

CREATE TRIGGER log_insercao_pedido AFTER INSERT ON pedido
FOR EACH ROW
BEGIN
    INSERT INTO log_pedido (id_pedido, data_insercao)
    VALUES (NEW.id_pedido, NOW());
END //

DELIMITER ;
