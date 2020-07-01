var http = require("http");
var fs = require("fs");

const PORT = 8080;
fs.readFile("../index.html", function (err, html) {
  if (err) throw err;

  http
    .createServer(function (req, res) {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    })
    .listen(PORT);
});

console.log("Hello, I am the node server.js file");
