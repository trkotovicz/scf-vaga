const data =  require("./fakeData");

const getUser = (req, res, _next) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).send("Necessário fornecer o nome do usuário");
  }   

  const user = data.find((user) => user.name === name);
  if (user) return res.send(user);

  return res.status(404).send("Usuário não encontrado");
};


const getUsers = ( req, res, next ) => {
	
	res.send(data);
	
};

module.exports = {
	getUser,
	getUsers
};