const User = require('./User');
const Shoes = require('./Shoes');

User.hasMany(Shoes, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Shoes.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Shoes };
