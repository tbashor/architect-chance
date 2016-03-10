'use strict';

module.exports = function(options, imports, register) {
  var log = imports.debug('plugins:chance');
  log('start');

  var Chance = require('chance');

  var api = {
    random: new Chance(),
    Random: function(seed){
      return new Chance(seed);
    }
  };

  log('register');
  register(null, api);

};
