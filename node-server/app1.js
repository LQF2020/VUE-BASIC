// 导入http模块
const http = require("http");
// 导入url模块
const urlModule = require("url");
//创建server实例
const server = http.createServer();

server.on("request", function (req, res) {
	//write your code here...
	const rawUrl = req.url;
	var { pathname: url, query } = urlModule.parse(rawUrl, true);
	console.log(rawUrl);
	console.log(url);
	console.log(query);
	var data = { id: 1, name: "Paul", gender: "male" };
	if (url === "/getData") {
		var scriptStr = JSON.stringify(data);
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
		res.header("Access-Control-Allow-Headers", "Content-Type");
		res.end(scriptStr);
	} else {
		res.end("404");
	}
});

server.listen(3000, function () {
	console.log("Server listen at http://127.0.0.1:3000");
});
