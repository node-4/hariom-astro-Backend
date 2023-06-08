const router = require("express").Router();

const notification = require("../controllers/NotificationController");
const { isAuthenticated } = require("../controllers/auth.controller");

router.post("/notifications", notification.addNotification);
router.get("/notifications", notification.getAllNotifications);
router.get("/notifications/:id", notification.getNotificationById);

module.exports = router;
