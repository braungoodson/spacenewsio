/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var SpaceNews = require('./space-news.model');

exports.register = function(socket) {
  SpaceNews.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  SpaceNews.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('space-news:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('space-news:remove', doc);
}