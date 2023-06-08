const Category = require("../models/CategoryModel");
exports.createCategory = async (req, res) => {
    try {
        const data = {name: req.body.name,image: req.body.image,type: req.body.type,};
        const category = await Category.create(data);
        res.status(201).json({success: true,category,});
    } catch (err) {
        res.status(400).json({message: err.message,});
    }
};
exports.getCategories = async (req, res) => {
    const categories = await Category.find({ type: req.query.type });
    res.status(201).json({success: true,categories});
};
exports.updateCategory = async (req, res) => {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) new ErrorHander("Category Not Found !", 400);
    let product = await Category.findByIdAndUpdate(id,{name: req.body.name || category.name,image: req.body.image || category.image,type: category.type}, { new: true, });
    res.status(200).json({success: true, data:product, message: "Updated Successfully" });
};
exports.removeCategory = async (req, res) => {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) new ErrorHander("Category Not Found !", 404);
    category.remove();
    res.status(200).json({ message: "Category Deleted Successfully !" });
};
exports.DeleteCategory = async (req, res) => {
    try {
        const data = await Category.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({message: "Deleted",});
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: err.message,
        });
    }
};
exports.TotalCategory = async (req, res) => {
    try {
        const data = await Category.find({ type:req.query.type  });
        res.status(200).json({total: data.length,});
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: err.message,
        });
    }
};
