module.exports = {
    create: async function (req, res) {
      try {
        const fornecedor = await Fornecedor.create(req.body).fetch();
        return res.json(fornecedor);
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    find: async function (req, res) {
      try {
        const fornecedores = await Fornecedor.find();
        return res.json(fornecedores);
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    findOne: async function (req, res) {
      try {
        const fornecedor = await Fornecedor.findOne({ fornecedor_id: req.params.id });
        if (!fornecedor) {
          return res.notFound();
        }
        return res.json(fornecedor);
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    update: async function (req, res) {
      try {
        const fornecedor = await Fornecedor.updateOne({ fornecedor_id: req.params.id }).set(req.body);
        if (!fornecedor) {
          return res.notFound();
        }
        return res.json(fornecedor);
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    destroy: async function (req, res) {
      try {
        const fornecedor = await Fornecedor.destroyOne({ fornecedor_id: req.params.id });
        if (!fornecedor) {
          return res.notFound();
        }
        return res.json(fornecedor);
      } catch (err) {
        return res.serverError(err);
      }
    }
  };
  