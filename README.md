Node.js - check is port available or get random available port.

[![npm version](https://badge.fury.io/js/node-porter.svg)](https://badge.fury.io/js/node-porter)
[![Build Status](https://travis-ci.org/edin-m/node-porter.svg?branch=master)](https://travis-ci.org/edin-m/node-porter)

Installation
===
```
npm install node-porter --save
```

Usage
===
Require:
```
var porter = require('node-porter');
```
___
Custom port:
```
porter(3000, function(err, port) {
    ...
})
```
___
Random port
```
porter(function(err, port) {
    ...
});
```

Test / Examples
===
```
npm test
```

Licence
===
ISC

See LICENCE for more detail.
