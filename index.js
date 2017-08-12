var net = require('net');

function porter(port, done) {
    done = done || port;
    if (typeof port === 'function') {
        port = 0;
    }

    var server = net.createServer(),
        _port = -1;

    server.on('listening', function () {
        _port = server.address().port;
        server.close();
    });

    server.on('close', function () {
        done(server.has_error, _port);
    });

    server.on('error', function (err) {
        done(err);
    });

    server.listen(port, 'localhost');
}

function promised(port) {
    port = port || 0;
    return new Promise(function (resolve, reject) {
        porter(port, function (err, _port) {
            if (err) {
                return reject(err);
            }
            return resolve(_port);
        });
    });
}

module.exports = porter;

if (typeof Promise === 'function') {
    module.exports.promised = promised;
}
