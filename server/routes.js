/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/movies-newss', require('./api/movies-news'));
  app.use('/api/theatre-newss', require('./api/theatre-news'));
  app.use('/api/metal-newss', require('./api/metal-news'));
  app.use('/api/economicss', require('./api/economics'));
  app.use('/api/space-newss', require('./api/space-news'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
