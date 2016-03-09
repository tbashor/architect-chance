'use strict';

module.exports = function(options, imports, register) {
  var log = imports.debug('plugins:chance');
  log('start');

  var chance = require('chance').Chance();

  var api = {
    random: chance
  };

  log('register');
  register(null, api);

};
