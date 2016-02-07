var _ = require('lodash');

module.exports = function factory(model, helper) {
  return function() {
    var argIndex = 0;
    /*
       for signatures like `method(id1, id2, options)`,
       place those ids directly in the path as per API
    */
    for (; argIndex < model.requiredResourceIdCount; argIndex++) {
      model.path = model.path.replace(/(\$[A-Za-z_]*)/, arguments[argIndex]);
    }
    var pageString = '';
    if ((arguments[argIndex] || {}).page) {
      pageString = '&page=' + arguments[argIndex].page
      argIndex++;
    }
    /*
       last argument is treated as body and populated
       with necessaries (staticProperties)
    */
    var body = arguments[argIndex] || {};
    _.assign(body, model.staticProperties);

    return helper({
      method: model.method,
      path: model.path + '?per_page=200' + pageString,
      body: body
    });
  };
}
