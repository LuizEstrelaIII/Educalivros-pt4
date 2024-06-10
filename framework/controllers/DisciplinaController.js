module.exports = {
    create: async function (req, res) {
      try {
        const { nome } = req.body;
        const newDisciplina = await Disciplina.create({ nome }).fetch();
        return res.status(201).json(newDisciplina);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    },
  
    find: async function (req, res) {
      try {
        const disciplinas = await Disciplina.find();
        return res.json(disciplinas);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    },
  
    findOne: async function (req, res) {
      try {
        const disciplina = await Disciplina.findOne({ disciplina_id: req.params.id });
        if (!disciplina) {
          return res.status(404).json({ error: 'Disciplina não encontrada' });
        }
        return res.json(disciplina);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    },
  
    update: async function (req, res) {
      try {
        const disciplinaAtualizada = await Disciplina.updateOne({ disciplina_id: req.params.id }).set(req.body);
        if (!disciplinaAtualizada) {
          return res.status(404).json({ error: 'Disciplina não encontrada' });
        }
        return res.json(disciplinaAtualizada);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    },
  
    destroy: async function (req, res) {
      try {
        const disciplinaRemovida = await Disciplina.destroyOne({ disciplina_id: req.params.id });
        if (!disciplinaRemovida) {
          return res.status(404).json({ error: 'Disciplina não encontrada' });
        }
        return res.json(disciplinaRemovida);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }
  };
  