/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Economics = require('./economics.model');

exports.register = function(socket) {
  Economics.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Economics.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('economics:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('economics:remove', doc);
}