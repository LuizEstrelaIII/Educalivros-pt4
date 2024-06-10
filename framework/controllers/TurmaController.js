// api/controllers/TurmaController.js
module.exports = {
    create: async function (req, res) {
      try {
        const newTurma = await Turma.create(req.body).fetch();
        return res.status(201).json(newTurma);
      } catch (error) {
        return res.status(500).json(error);
      }
    },
    find: async function (req, res) {
      try {
        const turmas = await Turma.find();
        return res.status(200).json(turmas);
      } catch (error) {
        return res.status(500).json(error);
      }
    },
    findOne: async function (req, res) {
      try {
        const turma = await Turma.findOne({ turma_id: req.params.id });
        if (!turma) {
          return res.status(404).json({ error: 'Turma not found' });
        }
        return res.status(200).json(turma);
      } catch (error) {
        return res.status(500).json(error);
      }
    },
    update: async function (req, res) {
      try {
        const updatedTurma = await Turma.updateOne({ turma_id: req.params.id }).set(req.body);
        if (!updatedTurma) {
          return res.status(404).json({ error: 'Turma not found' });
        }
        return res.status(200).json(updatedTurma);
      } catch (error) {
        return res.status(500).json(error);
      }
    },
    destroy: async function (req, res) {
      try {
        const deletedTurma = await Turma.destroyOne({ turma_id: req.params.id });
        if (!deletedTurma) {
          return res.status(404).json({ error: 'Turma not found' });
        }
        return res.status(200).json(deletedTurma);
      } catch (error) {
        return res.status(500).json(error);
      }
    }
  };
  