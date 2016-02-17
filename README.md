# digital-ocean-api-v2

Documentation-generated library for Digital Ocean's API v2

```bash
npm install digital-ocean-api-v2
```

This library is more or less generated automatically from the excellent [Digital Ocean API documentation](https://developers.digitalocean.com/documentation/v2). A [parser](https://github.com/itsjoesullivan/parsed-digital-ocean-api-documentation/blob/parser/parser.js) converts that page into [parsed-digital-ocean-api-documentation](https://github.com/itsjoesullivan/parsed-digital-ocean-api-documentation), and a small [factory](./lib/factory.js) turns those descriptions into functions, which [index](./index.js) piles onto an object, yielding:

```javascript
var DigitalOceanAPI = require('digital-ocean-api-v2');
var api = new DigitalOceanAPI(DIGITALOCEAN_ACCESS_TOKEN);
api.floatingIpActions.assignFloatingIpToDroplet(floatingIp, { droplet_id: 8219222 })
```

Each method returns a promise. For a list of methods, see [./methods.md](./methods.md)
