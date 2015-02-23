var net = require('net')
    , _ = require('lodash');

module.exports = function(port, done) {
    done = done || port;
    if(typeof port === 'function') {
        port = 0;
    }

    var server = net.createServer(),
        _port = -1;

    server.on('listening', function() {
        _port = server.address().port;
        server.close();
    });

    server.on('close', function() {
        done(server.has_error, _port);
    });

    server.on('error', function(err) {
        done(err);
    });

    server.listen(port, 'localhost');

};
