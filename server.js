const http = require('http');
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/healthz') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify({status: 'ok'}));
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from app-repo! ' + new Date().toISOString() + '\n');
});

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
