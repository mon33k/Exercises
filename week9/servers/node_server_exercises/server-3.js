const http = require('http')
const fs = require('fs')
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {})

    fs.readFile('index.html', (err, data) => {
        if(err) throw err;
        res.write(data);
        res.end();
    })
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
