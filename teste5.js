const data = require("./fakeData");

module.exports = function(req, res){
	const { name } =  req.query;

	if (!name) {
    return res.status(400).send("Necessário fornecer o nome do usuário");
  };

	const user = data.find(user => user.name === name);
  if (!user) return res.status(404).send("Usuário não encontrado");

	return res.send(`Usuário ${name} foi lido ${user.count} vezes.`);
};