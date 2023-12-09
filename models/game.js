// src/models/Game.js
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  // userId: { 
  //   type: String,
  //    required: true
  //    },
  // playerName: {
  //    type: String,
  //     required: true 
  //   },
  // score: { 
  //   type: Number,
  //    default: 0 
  //   },
  // Add more fields as needed

  userId: { 
    type: String,
     required: true
     },

  player: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  result: {
    type: String,
    enum: ['win', 'lose', 'draw'],
    required: true,
  },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
