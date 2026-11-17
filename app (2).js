const express = require('express');
const app = express();

app.get('/api/shop/:category/:id', (req, res) => {
    res.json({
        category: req.params.category,
        id: req.params.id
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});