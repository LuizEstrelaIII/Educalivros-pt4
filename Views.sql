CREATE VIEW vendas_por_cliente AS
SELECT 
    p.id_pedido, 
    p.data_pedido, 
    p.valor_total, 
    c.id_cliente
FROM 
    cliente c
JOIN 
    pedido p ON c.id_cliente = p.fk_id_cliente;

CREATE VIEW total_vendas_por_categoria AS
SELECT 
    pr.categoria, 
    SUM(ip.quantidade * pr.preco_unitario) AS total_vendas
FROM 
    inclui_prod ip
JOIN 
    produto pr ON ip.fk_id_produto = pr.id_produto
GROUP BY 
    pr.categoria;

CREATE VIEW ultimos_pedidos_por_cliente AS
SELECT 
    p.nome AS cliente_nome, 
    pd.id_pedido, 
    pd.data_pedido, 
    pd.valor_total
FROM 
    cliente c
JOIN 
    pessoa p ON c.fk_id_pessoa = p.id_pessoa
JOIN 
    pedido pd ON c.id_cliente = pd.fk_id_cliente
WHERE 
    pd.data_pedido = (SELECT MAX(data_pedido) FROM pedido WHERE fk_id_cliente = c.id_cliente);

CREATE VIEW produtos_abaixo_minimo AS
SELECT 
    nome, 
    quantidade, 
    quantidade_minima
FROM 
    produto
WHERE 
    quantidade < quantidade_minima;
