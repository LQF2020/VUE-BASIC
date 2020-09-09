const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./route/api/dbOperation.js")
//定义一个express实例
const app = express();
// 设置中间件,定义表单数据的解析类型
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


//允许跨域访问
app.use(cors());
routes(app);




const port = process.env.port || 7500;
app.listen(port, function () {
    console.log('Server is listening on http://127.0.0.1:' + port);
})
