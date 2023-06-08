const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller");
const upload = require("../services/upload");

router.get("/blogs", blogController.getBlogs);
router.post("/blogs", upload.single("image"), blogController.createBlog);
router.get("/blogs/:id", blogController.getBlogById);
router.put("/blogs/:id", blogController.updateBlogById);
router.delete("/blogs/:id", blogController.deleteBlogById);

module.exports = router;
