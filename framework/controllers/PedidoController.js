module.exports = {
    create: async function (req, res) {
      try {
        let pedido = await Pedido.create(req.body).fetch();
        return res.status(201).json(pedido);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    },
  
    find: async function (req, res) {
      try {
        let pedidos = await Pedido.find();
        return res.status(200).json(pedidos);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    },
  
    findOne: async function (req, res) {
      try {
        let pedido = await Pedido.findOne({ pedido_id: req.params.id });
        if (!pedido) {
          return res.status(404).json({ error: 'Pedido not found' });
        }
        return res.status(200).json(pedido);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    },
  
    update: async function (req, res) {
      try {
        let updatedPedido = await Pedido.updateOne({ pedido_id: req.params.id }).set(req.body);
        if (!updatedPedido) {
          return res.status(404).json({ error: 'Pedido not found' });
        }
        return res.status(200).json(updatedPedido);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    },
  
    destroy: async function (req, res) {
      try {
        let deletedPedido = await Pedido.destroyOne({ pedido_id: req.params.id });
        if (!deletedPedido) {
          return res.status(404).json({ error: 'Pedido not found' });
        }
        return res.status(200).json({ message: 'Pedido deleted successfully' });
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    }
  };
  