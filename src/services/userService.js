const data = require("../model/fakeData");

const getUser = (name) => {
  const user = data.find(user => user.name === name);
  if (!user) return false;
  user.count += 1;

  return user;
};

const getUsers = () => data;

const getUserAccess = (name) => {
  const user = data.find(user => user.name === name);
  if (!user) return false;
  return user;
};

const createUser = (name, job) => {
  const user = data.find(user => user.name === name);
  if (user) return false;

  const newUser = {
    id: data.length + 1,
    name,
    job,
    count: 0
  };

  data.push(newUser);
  return newUser;
};

const updateUser = (id, name, job) => {
  const index = data.findIndex(user => user.id === parseInt(id));
  if (index === -1) return false

  data[index].name = name;
  data[index].job = job;

  return data[index];
};

const deleteUser = (name) => {
  const index = data.findIndex(user => user.name === name);
  if (index === -1) return false;
  
  data.splice(index, 1);
  return true;
};

module.exports = { getUser, getUsers, getUserAccess, createUser, updateUser, deleteUser }