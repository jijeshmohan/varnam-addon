var http = require('http');
var addon = require('./build/Release/lib.target/varnam');
var file="ml-unicode.vst";

var url = require('url');

http.createServer(function(req,res) {
    var input = url.parse(req.url,true).query.input;
    if(input === undefined){
       res.writeHead(404);
       res.write('Bad request 404\n');
       res.end(); 
    }else{
        addon.runCallback(file,input,function(msg){
             res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8;', 'Access-Control-Allow-Origin': '*'});
             res.write(msg);
            res.end();
        });
       
    }
}).listen(3003);

console.log("Server is running in 3003");