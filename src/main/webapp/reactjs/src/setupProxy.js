const proxy = require("http-proxy-middleware")

module.exports = function (app){

app.use(
    proxy("/basicauth"),{
        target: "http://localhost:8080",
        secure:fasle,
        changeOrigin:true

    }
)


};