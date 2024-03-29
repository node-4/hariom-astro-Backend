const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin");
const { isAuthenticated } = require("../controllers/auth.controller");
const user = require("../controllers/userController");
const walletController = require("../controllers/walletController");
const followController = require("../controllers/followController");
const referController = require("../controllers/referController");
const notificationControllers = require("../controllers/NotificationController");
const testimonalControllers = require("../controllers/testimonial");
const payment = require("../controllers/payments");
const product = require("../controllers/productControllers");
const cart = require("../controllers/cart.controller");
const address = require("../controllers/address.controller");
const productOrder = require("../controllers/productOrder");
const productReview = require("../controllers/productReview.controller");

router.get("/search-language", isAuthenticated, user.SearchUserNameLangSkills);
router.get("/search-any-user-name", isAuthenticated, user.SearchUserName);
router.get(
    "/search-by-languages",
    isAuthenticated,
    user.SearchAnyLanguagesName
);
router.delete("/removed/:user_Name", isAuthenticated, user.deleteUserName);

router.delete(
    "/removed-language/:language",
    isAuthenticated,
    user.deleteLanguages
);
//blogs

// router.put("/blogs/:id", admin.UpdateBlogs);
router.get("/blogs/:id", admin.ViewDataBlogs);
router.get("/blogs", admin.GetBlogs);

//Products
router.get("/products/:id", product.getProduct);
router.get("/products", product.getProducts);

//Cart
router.get("/cart/:id", cart.getItemInCartOfUser);
router.post("/cart", isAuthenticated, cart.addToCart);

//Address
router.post("/address", address.create);
router.get("/address/:id", address.getByUserId);

//productOrder
router.post(
    "/productOrder",
    isAuthenticated,
    productOrder.createCartProductOrder
);
router.get("/productOrder", productOrder.getCartProductOrders);

//productReciew
router.post("/productReview", isAuthenticated, productReview.createReview);
router.get("/productReview", productReview.getAllReviews);

router.get("/", user.getAllUsers);
// router.route("/follow").post(isAuthenticated, followController.followById);

router
    .route("/refer")
    //.post(isAuthenticated, referController.generateRefer)
    .get(isAuthenticated, referController.getReferral)
    .put(isAuthenticated, referController.useReferCode);
router.put("/feedback/:id", user.updateFeedback);
router.put("/feedback/:id", user.deleteFeedback);

router.route("/feedback").post(user.UserFeedback);
router.route("/feedback/:id").get(user.getFeedbackById);
router.route("/feedback").get(user.GetAllFeedBack);
// router.get(
//     "/notification",
//     isAuthenticated,
//     notificationControllers.getNotification
// );
router.post("/payment", payment.CreatePaymentOrder),
    router.get("/payment/:id", payment.GetPaymentsById);

// Testimonial

router.get("/live", user.GetAstroliveChanges);
router.get("/upcoming", user.GetAstroUpcoming);

//Terms
router.get("/products/:id", product.getProduct);
router.get("/products", product.getProducts);
module.exports = router;
