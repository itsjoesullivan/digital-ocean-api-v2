# digital-ocean-api-v2

Documentation-generated library for Digital Ocean's API v2

This library is more or less generated automatically from the excellent [Digital Ocean API documentation](https://developers.digitalocean.com/documentation/v2). A rather messy [parser](./lib/parser.js) converts that page into [parsed-schema.json](./parsed-schema.json), and a small [factory](./lib/factory.js) turns those descriptions into functions, which [index](./index.js) piles onto an object, yielding:

```javascript
var DigitalOceanAPI = require('digital-ocean-api-v2');
var api = new DigitalOceanAPI(DIGITALOCEAN_ACCESS_TOKEN);
api.floatingIpActions.assignFloatingIpToDroplet(floatingIp, { droplet_id: 8219222 })
```

It's in beta while function signature stuff is thought through. There are a couple things that look like typos in the documentation that probably shouldn't be reflected in the API (no referer please).

Each method returns a promise. For a list of methods, see [./methods.md](./methods.md)

[TODOs](https://github.com/itsjoesullivan/digital-ocean-api-v2/labels/todo)
