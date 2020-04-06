const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware("/basicauth", { target: "http://localhost:8080" }));
    app.use(createProxyMiddleware("/menu/dishes", { target: "http://localhost:8080" }));

};