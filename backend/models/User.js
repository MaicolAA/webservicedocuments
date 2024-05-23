const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['Confidential', 'Secret', 'TopSecret'] },
});
module.exports = mongoose.model('User', userSchema);

