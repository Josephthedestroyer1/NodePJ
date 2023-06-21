const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello Node!!!!</h1>\n');
  res.end();
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

fs.appendFile('welcome.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

  fs.readFile('welcome.txt', function(err, data) {
    if (err) throw err;
    console.log('Read!: ' + data.toString());
  });
