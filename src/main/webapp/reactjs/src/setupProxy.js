var cors = require('cors');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://bufetindeks.duckdns.org:2023"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.get('/*', function(req, res, next) {

    });

    app.post('/*', function(req, res, next) {
    });
};