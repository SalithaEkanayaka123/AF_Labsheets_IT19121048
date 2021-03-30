

// console.log('Hello World');
//
// const os = require('os');
//
// console.log(os.arch());
// for (const cpu of os.cpus()){
//     console.log(cpu);
// }
// console.log(os.uptime());
// console.log(os.platform());

const fs = require('fs');
// //read the file
// fs.readFile('test.txt', (err,data) => {
//     //err is a exception
//     if (err){
//         console.error(err);
//         return;
//     }
//
//     console.log(data.toString());
// })
//
// const data = fs.readFileSync('text.txt');
// console.log(data.toString());

// //Question 4
// //create a read stream (this read your files as a stream
// //Create read stream and write stream from the source file and destination file
// const readStream = fs.createReadStream('test.txt');
// const writeStream = fs.createWriteStream('test-copy.txt');
//
//
// readStream.addListener('end', () => {
//     console.log('End of file with read');
// })
// writeStream.addListener('close', () => {
//     console.log('End of file with write');
//     //this is synchronuous
//     console.log(fs.readFileSync('test-copy.txt', 'utf-8'));
// })
//
// //Pipe the read stream to write stream.
// //this is asynchronous
// readStream.pipe(writeStream);

//Question  5

// //Import the http module from the core libraries.
// const http = require('http');
//
// //Create a httpServer that listens to port 3000 and return HTML with Hello World text in h1 header upon GET request.
// http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1>Hello World</h1>');
//     res.end();
// }).listen(3000);

//Optionally add a POST request that accepts form field name and return HTML with Hello {name}.
const http = require('http');
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
    }
}).listen(3000, (err) => {
    console.log('Server is listening to port 3000')
});


