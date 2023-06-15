const data = require("../model/fakeData");

const getUser = (name) => {
  const user = data.find(user => user.name === name);
  if (!user) return false;
  user.views += 1;

  return user;
};

const getUsers = () => data;

const getUserAccess = (name) => {
  const user = data.find(user => user.name === name);
  if (!user) return false;
  return user;
};

const createUser = (name, job, permissions) => {
  const user = data.find(user => user.name === name);
  if (user) return false;
  if (permissions !== 'admin') permissions = false;

  const newUser = {
    id: data.length + 1,
    name,
    job,
    views: 0,
    permissions
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