const router = require('express').Router();
const { Shoes } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newShoes = await Shoes.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newShoes);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const shoesData = await Shoes.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!shoesData) {
      res.status(404).json({ message: 'No Shoes found with this id!' });
      return;
    }

    res.status(200).json(shoesData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
