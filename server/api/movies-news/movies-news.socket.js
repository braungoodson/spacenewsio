/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var MoviesNews = require('./movies-news.model');

exports.register = function(socket) {
  MoviesNews.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  MoviesNews.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('movies-news:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('movies-news:remove', doc);
}