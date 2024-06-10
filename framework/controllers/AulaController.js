module.exports = {
    create: async function (req, res) {
      try {
        const novaAula = await Aula.create(req.body).fetch();
        return res.status(201).json(novaAula);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    },
  
    find: async function (req, res) {
      try {
        const aulas = await Aula.find();
        return res.status(200).json(aulas);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    },
  
    findOne: async function (req, res) {
      try {
        const aula = await Aula.findOne({ aula_id: req.params.id });
        if (!aula) {
          return res.status(404).json({ error: 'Aula não encontrada' });
        }
        return res.status(200).json(aula);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    },
  
    update: async function (req, res) {
      try {
        const aulaAtualizada = await Aula.updateOne({ aula_id: req.params.id }).set(req.body);
        if (!aulaAtualizada) {
          return res.status(404).json({ error: 'Aula não encontrada' });
        }
        return res.status(200).json(aulaAtualizada);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    },
  
    destroy: async function (req, res) {
      try {
        const aulaRemovida = await Aula.destroyOne({ aula_id: req.params.id });
        if (!aulaRemovida) {
          return res.status(404).json({ error: 'Aula não encontrada' });
        }
        return res.status(204).json();
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }
  };
  