const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({message: 'test complete'})
});

router.post('/', (req, res) => {
    res.json({
        message: 'data received',
        data: JSON.stringify(req.body),
    });
    console.log(req.body);
});


module.exports = router;


