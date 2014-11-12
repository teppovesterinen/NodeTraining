var http = require('http');

var server = http.createServer(function(req, res) {
   res.writeHead(200);
   var x = '-not much, mah nigga';
   res.end('wha d\'up dawg' + x);
});
server.listen(8080);

/*blahbla
*whooot
*yeah!
*/