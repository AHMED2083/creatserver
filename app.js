const http = require("http");
const fs = require("fs");

http
.createServer((request, response) => {
  fs.readFile("./index.html", "utf-8", (err, data) => {
    response.end(data);
  });
}).listen("1337", "192.168.1.40");
