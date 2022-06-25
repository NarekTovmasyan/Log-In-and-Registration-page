const fs = require("fs");
const http = require("http");
const path = require("path");

const extType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png":"image/png"
}

http.get("http://time.jsontest.com", (res)=>{
    res.setEncoding("utf8");
    let rawResp="";
    res.on("data",(chank)=>{
        rawResp+=chank;
    });
    res.on("end",()=>{
        try{
            const parseResp=JSON.parse(rawResp);
            console.log("parseResp",parseResp);
        }catch(err){
            console.error(`error: ${err.message}`,"barev");
        }
    })
})

function filePathFunc(req, res, next) {
    let url = req.url;
    if (url === "/") {
        url = "/index.html";
    }
    const filePath = path.resolve("public" + url)
    fs.promises.access(filePath)
        .then(() => {
            const ext = path.extname(filePath);
            res.writeHead(200, {
                'Content-type': extType[ext]
            });
            fs.createReadStream(filePath).pipe(res)
        })
        .catch(() => {
            next();
        })
}

const server = http.createServer((req, res) => {
    filePathFunc(req, res, () => {
        if (req.url === "/hello") {
            res.writeHead(200, {
                'Content-type': 'text/plain'
            });
            res.end('barev dzez Narek!!!!')
        } else if (req.url === "/bye") {
            res.writeHead(200, {
                "Content-Type": "application/json"
            });
            res.end(JSON.stringify({
                name: "Narek"
            }))
        } else {
            res.writeHead(404, {
                "Content-type": "text/plain"
            });
            res.end("Not found");
        }
    })

})



server.listen(1001)