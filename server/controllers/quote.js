const { quote: QuoteModel } = require('../models');

module.exports = {
  get: (req, res) => {
    const number = Math.floor(Math.random() * 3) + 1;
    QuoteModel.findOne({
      where: {
        id: number
      }
    })
      .then((result) => {
        const data = {
          content: result.content,
          name: result.name
        };
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(401).json({ message: 'failure' });
      });
  }
};
