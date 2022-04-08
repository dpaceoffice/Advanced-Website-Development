var express = require("express");
var router = express.Router();
const {
  resetGame,
  guess,
  getGame,
  newGame,
  test,
} = require("../controllers/game.controllers");
router.get("/test", newGame);
router.get("/new", newGame);
router.get("/:id", getGame);
router.get("/:id/guess", guess);
router.get("/:id/reset", resetGame); //define variable route with colon(:)
//Note: variable routes go after defined routes
module.exports = router;
