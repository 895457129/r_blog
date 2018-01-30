const mysql  = require('mysql');

exports.ApiDb = mysql.createConnection({
  host: '120.78.179.122',
  user: 'develop',
  password: 'develop',
  database:'api',
  port: 3306
});
