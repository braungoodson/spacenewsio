/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var MetalNews = require('./metal-news.model');

exports.register = function(socket) {
  MetalNews.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  MetalNews.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('metal-news:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('metal-news:remove', doc);
}