module.exports = {
    create: async function (req, res) {
      try {
        const editora = await Editora.create(req.body).fetch();
        return res.json(editora);
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    find: async function (req, res) {
      try {
        const editoras = await Editora.find();
        return res.json(editoras);
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    findOne: async function (req, res) {
      try {
        const editora = await Editora.findOne({ editora_id: req.params.id });
        if (!editora) {
          return res.notFound();
        }
        return res.json(editora);
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    update: async function (req, res) {
      try {
        const editora = await Editora.updateOne({ editora_id: req.params.id }).set(req.body);
        if (!editora) {
          return res.notFound();
        }
        return res.json(editora);
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    destroy: async function (req, res) {
      try {
        const editora = await Editora.destroyOne({ editora_id: req.params.id });
        if (!editora) {
          return res.notFound();
        }
        return res.json(editora);
      } catch (err) {
        return res.serverError(err);
      }
    }
  };
  