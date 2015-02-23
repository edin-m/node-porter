Node.js - check is port available or get random available port.

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
