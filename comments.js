//create web server
// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// http.createServer(function(req, res) {
//     if (req.url === '/') {
//         fs.readFile(path.join(__dirname, 'index.html'), function(err, data) {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         });
//     } else if (req.url === '/about') {
//         fs.readFile(path.join(__dirname, 'about.html'), function(err, data) {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         });
//     } else if (req.url === '/contact') {
//         fs.readFile(path.join(__dirname, 'contact.html'), function(err, data) {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         });
//     } else {
//         fs.readFile(path.join(__dirname, '404.html'), function(err, data) {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         });
//     }
// }).listen(3000, function() {
//     console.log('Server started on port 3000...');
// });
//create web server using express
// const express = require('express');
// const path = require('path');
// const app = express();
// //set static folder
// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
// app.get('/about', function(req, res) {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });
// app.get('/contact', function(req, res) {
//     res.sendFile(path.join(__dirname, 'public', 'contact.html'));
// });
// app.use(function(req, res) {
//     res.sendFile(path.join(__dirname, 'public', '404.html'));
// });
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, function()