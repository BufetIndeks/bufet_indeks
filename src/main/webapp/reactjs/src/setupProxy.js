const proxy = require("http-proxy-middleware")

module.exports = function (app){

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/', function(req, res, next) {
        // Handle the get for this route
    });

    app.post('/', function(req, res, next) {
        // Handle the post for this route
    });

};