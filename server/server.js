const express = require('express');
const path = require("path");
require("colors");
const  proxyMiddleware = require('http-proxy-middleware');
const compression = require('compression');
const { DB } = require('./db/index');

DB.query('SELECT * FROM api.tag LIMIT 10;', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results, fields);
});

DB.end();
const app = express();
app.use(logger);
app.use("/api/tag", function (res) {

})
app.listen(8099);

function logger(req,res,next){
    console.log("time: %s,url: %s".blue, Date(), req.url);
    next();
}
