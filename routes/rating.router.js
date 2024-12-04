const { Router } = require("express");
const { decode } = require("../middleware/decode.jwt");
const { getRatingByProdcutId, createRating, updateRating, deleterating } = require("../controllers/rating.controller");

const ratingRouter = Router();

ratingRouter.get("/:productId", getRatingByProdcutId);
ratingRouter.post("/", decode, createRating);
ratingRouter.patch("/:ratingId", decode, updateRating);
ratingRouter.delete("/:ratingId", decode, deleterating);

module.exports = { ratingRouter };