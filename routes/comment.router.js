const { Router } = require("express");
const { decode } = require("../middleware/decode.jwt");
const { getAllProducts } = require("../controllers/product.controller");
const { createComment, updateComment, deleteComment } = require("../controllers/comment.controller");

const CommentRouter = Router();

CommentRouter.get("/:productId", getAllProducts);
CommentRouter.post("/", decode, createComment);
CommentRouter.patch("/:commentId", decode, updateComment);
CommentRouter.delete("/:commentId", decode, deleteComment);
module.exports = { CommentRouter };