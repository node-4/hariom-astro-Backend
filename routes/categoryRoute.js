const express = require("express");
const { createCategory, getCategories, DeleteCategory, TotalCategory, updateCategory } = require("../controllers/categoryController");
const router = express.Router();
router.route("/admin/category/new").post(createCategory);
router.route("/getAllCategory").get(getCategories);
router.route("/admin/category/:id").put(updateCategory)
router.route('/admin/delete/cat/:id').delete(DeleteCategory)
router.route('/admin/total/cat').get(TotalCategory);
module.exports = router;
