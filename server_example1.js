var http=require('http');

var s=http.createServer(function(req,res){
    res.end('Hello World');
}).listen(8920);