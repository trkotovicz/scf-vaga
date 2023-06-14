const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.get("/user", userController.getUser);
userRouter.get("/users", userController.getUsers);
userRouter.post("/users", userController.createUser);
userRouter.delete("/users", userController.deleteUser);
userRouter.put("/users", userController.updateUser);
userRouter.get("/users/access", userController.getUserAccess);

module.exports = userRouter;
