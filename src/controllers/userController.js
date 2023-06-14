const userService = require("../services/userService");


module.exports = {
  getUser: (req, res) => {
    const { name } = req.query;
    if (!name) return res.status(400).send("Necessário fornecer o nome do usuário");

    const user = userService.getUser(name);
    if (!user) return res.status(404).send("Usuário não encontrado");

    return res.status(200).json(user);
  },

  getUsers: (req, res) => {
    const users = userService.getUsers();
    return res.status(200).json(users);
  },

  getUserAccess: (req, res) => {
    const { name } =  req.query;
    if (!name) {
      return res.status(400).send("Necessário fornecer o nome do usuário");
    }

    const user = userService.getUserAccess(name);
    if (!user) return res.status(404).send("Usuário não encontrado");

    return res.send(`Usuário ${name} foi lido ${user.count} vezes.`);
  },

  createUser: (req, res) => {
    const { name, job } = req.body;
    if (!name || !job) {
      return res.status(400).send("Necessário fornecer nome e profissão do usuário");
    }

    const user = userService.createUser(name, job);
    if (!user) {
      return res.status(409).send("Usuário já cadastrado");
    }

    return res.status(201).send(user);
  },

  updateUser: (req, res) => {
    const { id } =  req.query;
    const { name, job } = req.body;

    if (!id) return res.status(401).send("Necessário informar ID");
    if (!name || !job) {
      return res.status(400).send("Necessário informar nome e profissão");
    }

    const user = userService.updateUser(id, name, job);
    if (!user) return res.status(404).send("Usuário não encontrado");

    return res.status(200).send(user);
  },

  deleteUser: (req, res) => {
    const { name } = req.query;
    if (!name) {
      return res.status(400).send("Necessário fornecer o nome do usuário");
    }

    const success = userService.deleteUser(name);
    if (!success) {
      return res.status(404).send("Usuário não encontrado");
    }
    
    return res.status(200).send("Usuário deletado com sucesso");
  },
}