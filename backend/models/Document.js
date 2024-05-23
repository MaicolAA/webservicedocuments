const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    classification: { type: String, required: true, enum: ['Confidential', 'Secret', 'TopSecret'] },
});
module.exports = mongoose.model('Document', documentSchema);
