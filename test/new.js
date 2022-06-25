//
// const http = require('https');
//
//
// http
//   .createServer((req, res) => {
//     res.write('hello\n');
//     res.end();
//   })
//   .listen(3000);
//
// setInterval(() => {
//   http.get('https://www.youtube.com/watch?v=jivZO6NlEp8',"utf8", (res) => {
//     res.on('data', (data) => {
//       console.log(data);
//     });
//   });
// }, 5000);


const express=require("express")