
//-------BOILERPLATE--------//
//Making a server for content rendering

const http = require('http');

const port = 3000;

const html = `<h1>Welcome to my site</h1>
<p>content coming soon</p>`

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("Hello World");
    res.end();
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`); //or you can just write ${port} and the computer will know automatically what it is
});


