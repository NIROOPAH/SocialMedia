import express from "express";
import { createPost, deletePost, getPost, updatePost } from "../Controllers/PostController.js";
const router=express.Router();

router.post('/',createPost)
router.get('/:id',getPost)
router.put('/:id/update',updatePost)
router.delete('/:id/delete',deletePost)

export default router;