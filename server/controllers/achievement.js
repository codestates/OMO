const sequelize = require('sequelize');

module.exports = {
  get: (req, res) => {
    const userId = req.params.userId;
    res.status(200).json({ message: 'ok' });
  }
};
