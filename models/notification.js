const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        astrologerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "astrologer",
        },
        read: {
            type: Boolean,
            default: false
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);
