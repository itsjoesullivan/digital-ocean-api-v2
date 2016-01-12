var rp = require('request-promise');
var _ = require('lodash');

var token;

function apiRequest(userOptions) {
  var options = _.cloneDeep(userOptions);
  options.uri = "https://api.digitalocean.com" + options.path;
  options.headers = {
    "Authorization": "Bearer " + token,
    "Content-Type": "application/json"
  };
  options.json = true;
  return rp(options);
};

module.exports = function(userToken) {
  token = userToken;
  return apiRequest;
};
