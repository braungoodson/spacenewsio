/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var TheatreNews = require('./theatre-news.model');

exports.register = function(socket) {
  TheatreNews.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  TheatreNews.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('theatre-news:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('theatre-news:remove', doc);
}