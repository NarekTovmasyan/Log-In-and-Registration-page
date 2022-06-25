const http = require("http");
const port = 1200;

const server = http.createServer((req, res, next) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    res.end(JSON.stringify({
        name: "Narek"
    }))
})

server.listen(port, () => {
    console.log("server is listening port", port);
})


