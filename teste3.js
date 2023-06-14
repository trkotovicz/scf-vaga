let data =  require("./fakeData");

module.exports = function(req, res) {
	const { name } =  req.query;

  if (!name) {
    return res.status(400).send("Necessário fornecer o nome do usuário");
  }   

	let newUsers = [];
  data.map((user) => {
		if (user.name !== name) {
			newUsers.push(user)
		}
	});

	return res.status(200).send(newUsers);
};