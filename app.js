var http = require("http");
const port = process.env.PORT || 3002;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
  })
  .listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
