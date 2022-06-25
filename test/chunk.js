// Importing http libraries
const http = require('http');

// Creating a server
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        // Sending the response
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write(`<body><form action="/message" method="POST">
	<input type="text" name="message"></input>
	<button type="submit">Send</button></form></body></html>`);
        res.write('</html>');
        return res.end();
    }

    // Handling different routes for different type request
    if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {

            // Storing the chunk data
            body.push(chunk);
            console.log("body", body)
        });

        req.on('end', () => {

            // Parsing the chunk data
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            // Printing the data
            console.log("parsedBody", parsedBody);
            console.log("message", message);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
});

// Starting the server
server.listen(1100, () => {
    console.log("thes server runing in 3000 port");
});

///////https://www.youtube.com/watch?v=V1wm6-7ZK1c

setInterval(() => {
    const request = http.request("http://localhost:3000/message", function (res) {
        let data = '';
        res.on('data', function (chunk) {
            // console.log("chunk************************************************************************************************************************************************************************************************************************************************", chunk);
            data += chunk;
            // console.log("data************************************************************************************************************************************************************************************************************************************************", data);
        });
        res.on('end', function () {
            // console.log("chunk************************************************************************************************************************************************************************************************************************************************", chunk);
            console.log(data);
            // console.log("data************************************************************************************************************************************************************************************************************************************************", data);
        });
    });
    request.on('error', function (e) {
        console.log(e.message);
    });
    request.end();
}, 2000);