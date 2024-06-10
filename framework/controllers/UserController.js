module.exports = {
    create: async function (req, res) {
      try {
        let user = await User.create(req.body).fetch();
        return res.status(201).json(user);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    },
  
    find: async function (req, res) {
      try {
        let users = await User.find();
        return res.status(200).json(users);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    },
  
    findOne: async function (req, res) {
      try {
        let user = await User.findOne({ id: req.params.id });
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json(user);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    },
  
    update: async function (req, res) {
      try {
        let updatedUser = await User.updateOne({ id: req.params.id }).set(req.body);
        if (!updatedUser) {
          return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json(updatedUser);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    },
  
    destroy: async function (req, res) {
      try {
        let deletedUser = await User.destroyOne({ id: req.params.id });
        if (!deletedUser) {
          return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json({ message: 'User deleted successfully' });
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    }
  };
  