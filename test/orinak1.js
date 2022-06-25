const http = require('https');

const options = {
    // host: 'google.com',
    //path:"/"
    host: "www.youtube.com/watch?v=jivZO6NlEp8",
    path: '/watch?v=jivZO6NlEp8'
}
//989
//994
//998

setInterval(() => {
    const request = http.request("https://www.youtube.com/watch?v=V1wm6-7ZK1c", function (res) {
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
}, 5000);

//https://www.youtube.com/watch?v=V1wm6-7ZK1c   VLAD
//www.youtube.com/watch?v=jivZO6NlEp8   DZOR

// const http = require("https");

// setInterval(() => {
//     const resGet = http.get("https://www.youtube.com/watch?v=V1wm6-7ZK1c", (req, res) => {
//         let data = "";
//         res.on("data", function (chunk){
//             // console.log("chunk****************************************", chunk);
//             data += chunk;
//             // console.log("data****************************************", data);
//         })
//         res.on("end", () => {
//             console.log(data);
//         })
//     });
//     console.log("resGet",resGet);
//     resGet.on('error', function (e) {
//         console.log(e.message);
//     });
//     resGet.end();
// }, 10000);