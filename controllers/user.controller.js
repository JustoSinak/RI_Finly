const User = require('../libs/models/user.model');

const createUser = async (req, res) => {
  await User.create({
    email: 'tcheumanisinakjusto@gmail.com',
    password: 'password',
  });
  res.render('user', { message: 'User Created', user: null });
};

const getUser = async (req, res) => {
  const user = await User.findOne({ email: 'tcheumanisinakjusto@gmail.com' });
  res.render('user', { message: 'User Retrieved', user: user });
};

const deleteUser = async (req, res) => {
  await User.findOneAndDelete({ email: 'tcheumanisinakjusto@gmail.com' });
  res.render('user', { message: 'User Deleted', user: null });
};

module.exports = {
  getUser,
  createUser,
  deleteUser,
};
