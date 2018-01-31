const router = require('express').Router();

router.get('/tasks', (req, res, next) => {
res.send('api here');
});

module.exports = router;