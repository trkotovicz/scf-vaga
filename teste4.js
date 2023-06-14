const data =  require("./fakeData");

module.exports =  function(req, res) {
	const { id } =  req.query;
	const { name, job } = req.body;

	if (!id) return res.status(401).send("Necessário informar ID");
	if (!name || !job) {
		return res.status(400).send("Necessário informar nome e profissão");
	}

	const index = data.findIndex(user => user.id === parseInt(id));
  if (index === -1) {
    return res.status(404).send("Usuário não encontrado");
  }

  data[index].name = name;
  data[index].job = job;

  return res.status(200).send(data);
};