var factory = require('../lib/factory');
var queryString = require('query-string');
var assert = require('assert');
var methodCategories = require('parsed-digital-ocean-api-documentation');
var updateImage = methodCategories[6].items[4];

var model = {
  requiredResourceIdCount: 0,
  method: "GET",
  path: "https://api.digitalocean.com/v2/account"
};

describe('factory', function() {
  it("uses model's method", function() {
    var instance = factory(model, function(props) {
      assert.equal(props.method, "GET");
    });
    instance();
  });
  it('sets per_page to 200', function() {
    var instance = factory(model, function(props) {
      var search = props.path.split('?')[1];
      var objs = queryString.parse(search);
      assert.equal(objs.per_page, 200);
    });
    instance();
  });
  it('sets page if present', function() {
    var instance = factory(model, function(props) {
      var search = props.path.split('?')[1];
      var objs = queryString.parse(search);
      assert.equal(objs.page, 3);
    });
    instance({
      page: 3
    });
  });
  it('does not set page if not present', function() {
    var instance = factory(model, function(props) {
      var search = props.path.split('?')[1];
      var objs = queryString.parse(search);
      assert.equal(objs.page, null);
    });
    instance({});
  });
  it('inserts first argument in place of "$..." variable in path"', function() {
    var instance = factory(updateImage, function(props) {
      assert.equal(props.path.split('?')[0], "/v2/images/100")
    });
    instance(100, {});
  });
});
