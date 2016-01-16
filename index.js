var methodCategories = require('parsed-digital-ocean-api-documentation');
var factory = require('./lib/factory');
var Helper = require('./lib/util/helper');

var API = module.exports = function(token) {
  var helper = Helper(token);
  /*
     populate api object
  */
  methodCategories.forEach(function(methodCategory) {
    this[methodCategory.name] = {};
    methodCategory.items.forEach(function(method) {
      this[methodCategory.name][method.name] = factory(method, helper);
    }.bind(this));
  }.bind(this));
};
