var helper = require('./util/helper')(process.env.DIGITALOCEAN_ACCESS_TOKEN);
var _ = require('lodash');

module.exports = function factory(model) {
  return function() {
    var argIndex = 0;
    /*
       for signatures like `method(id1, id2, options)`,
       place those ids directly in the path as per API
    */
    for (; argIndex < model.requiredResourceIdCount; argIndex++) {
      model.path = model.path.replace(/(\$.*)(?:\/|$)/, arguments[argIndex]);
    }
    /*
       last argument is treated as body and populated
       with necessaries (staticProperties)
    */
    var body = arguments[argIndex] || {};
    _.assign(body, model.staticProperties);

    return helper({
      method: model.method,
      path: model.path,
      body: body
    });
  };
}
