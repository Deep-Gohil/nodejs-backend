const {Router} = require("express");
const { GetAllUsers, Login, Signup, GetUser, DeleteUser, VerifyUser, deleteMany, getAdmins } = require("../controllers/userController");
const { decode } = require("../middleware/decode.jwt.js");
const { isSuperAdmin } = require("../middleware/admin.js");

const userRouter = Router();

userRouter.get("/all",GetAllUsers);
userRouter.get("/all-admin",decode,isSuperAdmin,getAdmins)
userRouter.get("/:id",GetUser);
userRouter.post("/signup",Signup);
userRouter.post("/login",Login);
userRouter.delete("/:id",DeleteUser);
userRouter.delete("/deleteMany/:id",deleteMany)
userRouter.get("/verify/:token/:otp", VerifyUser);



module.exports = userRouter;