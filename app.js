console.log("Welcome to Verzeo")

var http=require('http');

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Welcome to Verzeo!');

}).listen(8080);