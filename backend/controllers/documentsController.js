const Document = require('../models/Document');

exports.getRole = (req, res) => {
    try {
        const user = req.user;
        res.json({ role: user.role });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getDocuments = async (req, res) => {
    try {
        const user = req.user;
        const documents = await Document.find({ classification: { $lte: user.role } });
        res.json({ documents });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
