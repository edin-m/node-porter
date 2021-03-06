var net = require('net');
var async = require('async');
var expect = require('chai').expect;

var porter = require('./index');

describe('it should test library', function () {
    var busyPort, freePort, server;

    before(function (done) {
        async.series([
            function (done_) {
                server = net.createServer();
                server.on('listening', function () {
                    busyPort = server.address().port;
                    done_();
                });
                server.listen();
            },
            function (done_) {
                var freePortServer = net.createServer();
                freePortServer.on('listening', function () {
                    freePort = freePortServer.address().port;
                    freePortServer.close();
                    done_();
                });
                freePortServer.listen();
            }
        ], done);
    });

    it('should fail when trying to probe used port', function (done) {
        porter(busyPort, function (err, port) {
            console.log(err, port);
            expect(err).to.not.be.undefined;
            done();
        });
    });

    it('should succeed to open some available port', function (done) {
        porter(freePort, function (err, port) {
            expect(err).to.be.undefined;
            expect(port).to.equal(freePort);
            done();
        });
    });

    it('should succed to open random port', function (done) {
        porter(function (err, port) {
            expect(err).to.be.undefined;
            expect(port).to.be.above(0);
            done();
        });
    });

    it('test promise', function (done) {
        porter.promised(0)
            .then(function (port) {
                expect(port).to.be.above(0);
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });

    after(function (done) {
        server.close(function () {
            done();
        });
    });
});
