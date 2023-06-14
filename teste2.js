const data =  require("./fakeData");

module.exports = function(req, res){
  const { name, job } =  req.body;

	if (!name || !job) {
		return res.status(400).send("Necessário fornecer nome e profissão do usuário");
	}

	const user = data.find((user) => user.name === name);
  if (user) return res.status(409).send("Usuário já cadastrado");

	const newUser = {
		id: data.length + 1,
		name,
		job,
	}

	data.push(newUser);

	return res.status(201).send(newUser);
};