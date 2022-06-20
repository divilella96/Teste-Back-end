const express = require('express');
const router = express.Router();

const universitiesController = require('../controllers/universitiesController');

router.get('/', universitiesController.getAll);
router.get('/:id', universitiesController.getById);
router.post('/', universitiesController.insert);
router.put('/:id', universitiesController.updateById);
router.delete('/:id', universitiesController.deleteById);

module.exports = router