const http = require('http');
const options = new URL('http://time.jsontest.com');

// const req = https.request(options, (res) => {
//     res.on('data', (data) => {
//         console.log(data);
//     });
// });
// console.log("req",data);
// // const getRes=https.get("https://www.youtube.com/watch?v=TK6iLaSCc8Q", (res)=>{

// // })
// https.createServer((req, res) => {
//         res.write("req"+options);
//         res.end();
//     })
//     .listen(9009);

// setInterval(() => {
    
//     https.get(options, (res) => {
//         res.on('data', (data) => {

//         });
//     });
// }, 5000);

http.get('http://time.jsontest.com', (res) => {
    const {
        statusCode
    } = res;
    const contentType = res.headers['content-type'];

    let error;
    // Any 2xx status code signals a successful response but
    // here we're only checking for 200.
    if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
            `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
            `Expected application/json but received ${contentType}`);
    }
    if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            console.log(parsedData);
        } catch (e) {
            console.error(e.message);
        }
    });
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});

// Create a local server to receive data from
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({
        data: 'Hello World!'
    }));
});

server.listen(8002);






// http.get("http://time.jsontest.com", (res)=>{
//     res.setEncoding("utf8");
//     let rawResp="";
//     res.on("data",(chank)=>{
//         rawResp+=chank;
//     });
//     res.on("end",()=>{
//         try{
//             const parseResp=JSON.parse(rawResp);
//             console.log("parseResp",parseResp);
//         }catch(err){
//             console.error(`error: ${err.message}`,"barev");
//         }
//     })
// })