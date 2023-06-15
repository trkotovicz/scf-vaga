const data = require('../model/fakeData');

const checkPermissions = (req, res, next) => {
  const method = req.method;
  const { id, name } = req.query;

  let user;

  if (method === 'DELETE') user = data.find(user => user.name === name);
  if (method === 'PUT') user = data.find(user => user.id === parseInt(id));

  if (!user || !user.permissions) {
    return res.status(403).send('Usuário não encontrado ou permissão negada');
  }

  next();
};

module.exports = checkPermissions;
