const http = require('http');
const fs = require('node:fs');
const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("pages/home.html", "utf8", (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        });
    }
    else if (req.url === '/about') {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("pages/about.html", "utf8", (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        });
    } 
    else if(req.url === '/create-file'){
        res.writeHead(200, { "Content-Type": "text/html" });
        const data = "<h1>This is test file</h1>";

        for (let index = 0; index < 10; index++) {
            fs.appendFile("temp/test.html", data, (err) => {
                if(err) throw err;
            });
        }

        res.write("file is created");
        res.end();
    }
    else {
        res.writeHead(400, { "Content-Type": "text/html" });
        fs.readFile("pages/404.html", "utf8", (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        });
    }

});

console.log(`server is running on port : ${PORT}`);

// Event loop task sequence
// mini task -> nextTick
// micro task -> promises
// macro task -> setTimeout, setInterval

server.listen(PORT);