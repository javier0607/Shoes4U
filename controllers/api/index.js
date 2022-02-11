const router = require('express').Router();
const userRoutes = require('./userRoutes');
const shoesRoutes = require('./shoesRoutes');

router.use('/users', userRoutes);
router.use('/shoes', shoesRoutes);

module.exports = router;
