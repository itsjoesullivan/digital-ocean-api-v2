var methodCategories = require('./parsed-schema');
var factory = require('./lib/factory');

var api = module.exports = {};

/*
   populate api object
*/
methodCategories.forEach(function(methodCategory) {
  api[methodCategory.name] = {};
  methodCategory.items.forEach(function(method) {
    api[methodCategory.name][method.name] = factory(method);
  });
});
