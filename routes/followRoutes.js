const router = require("express").Router();
const { isAuthenticated } = require("../controllers/auth.controller");
const {
    follow,
    unFollow,
    followers,
    followingOfUser,
} = require("../controllers/followController");
router.post("/follow/:id", isAuthenticated ,follow);
router.post("/unfollow/:id", isAuthenticated , unFollow);
router.get("/followers/:id", followers);
router.get("/following/:id", followingOfUser);
module.exports = router;
