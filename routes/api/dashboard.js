const router = require("express").Router();
const userController = require("../../controllers/user");

router.route("/")
.get(userContoroller.findAll)
.post(userController.create);

//something for login here

//when logged in they arrive at the dashboard. Each user with their own ID
//will need to get all of the specific users data

router
.route("/:id")
//get user specific info
//get weight from users table
//get ideal weight from users table
//get daily calories from users table
//update calorie intake to food table
//update todos to todo table
//update weight to users table
//create workout
//update workoiut



