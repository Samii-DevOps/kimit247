const http = require("http");
const os = require("os");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <h1>Wholam – Proof by Sami</h1>
    <p>Hostname: ${os.hostname()}</p>
    <p>Timestamp: ${new Date().toISOString()}</p>
  `);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Listening on http://0.0.0.0:${PORT}`);
});
