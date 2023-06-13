const data =  require("./fakeData");

module.exports = function(req, res){
  const { name, job } =  req.body;

	const lastItem = data[data.length -1];
    
	const newUser = {
		id: lastItem.id + 1,
		name,
		job,
	}

	data.push(newUser)

	res.status(201).send(newUser);

};