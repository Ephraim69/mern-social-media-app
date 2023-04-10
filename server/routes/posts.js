import express from "express";
import {getFeedPosts, getUserPost, likePost} from "../controllers/posts.js";
import {verifyToken} from "../middleware/auth.js";

const router = express.Router()

/* Reading */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts/", verifyToken, getUserPosts);

router.patch("/:id/like", verifyToken, likePost);