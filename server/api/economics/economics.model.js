'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EconomicsSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Economics', EconomicsSchema);