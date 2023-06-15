const { Router } = require('express');
const userController = require('../controllers/userController');
const checkPermissions = require('../middlewares/permissionMiddleware');

const userRouter = Router();

userRouter.get("/user", userController.getUser);
userRouter.get("/users", userController.getUsers);
userRouter.post("/users", userController.createUser);
userRouter.get("/users/access", userController.getUserAccess);

userRouter.use(checkPermissions);
userRouter.delete("/users", userController.deleteUser);
userRouter.put("/users", userController.updateUser);

module.exports = userRouter;
