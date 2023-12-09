const Game = require("../models/game");

// create a game
const createGame = async (req, res) => {
  try {
    //const { userId, playerName, score } = req.body;
    const { userId, player, score, result } = req.body;
    //const game = new Game({ userId, playerName, score });
    const newGame = new Game({ userId, player, score, result });
    const savedGame = await newGame.save();
    res.status(201).json({
      success: true,
      message: "Game entry successfully create!",
      //game,
      savedGame,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

//get All games
const getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get games entry BYId
const getGameData = async (req, res) => {
  try {
    const userId = req.params.userId;
    const games = await Game.find({ userId });
    res.status(200).json({
      success: true,
      message: "Game entry fetched",
      games,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

//update game entry
const updateGameData = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { playerName, score } = req.body;
    const game = await Game.findOneAndUpdate(
      { userId },
      { playerName, score },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Game entry updated!",
      game,
    });
  } catch (error) {
    res.status(500).json({
      success: flase,
      error: error.message,
    });
  }
};

//delete game entry
const deleteGameEntry = async (req, res) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      return res.status(500).json({
        success: false,
        message: "Entry not found!!!",
      });
    }
    await Game.findOneAndDelete({ userId });
    res.status(204).json({
      message: "Game entry Deleted!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createGame,
  getAllGames,
  getGameData,
  updateGameData,
  deleteGameEntry,
};
