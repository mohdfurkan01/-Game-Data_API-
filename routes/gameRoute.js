const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');


router.post('/crateGame', gameController.createGame);
router.get('/allGame', gameController.getAllGames);
router.get('/:userId', gameController.getGameData);
router.put('/:userId', gameController.updateGameData);
router.delete('/:userId', gameController.deleteGameEntry);

module.exports = router;


