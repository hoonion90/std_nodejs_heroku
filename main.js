var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
  var url = request.url;
  if(request.url == '/'){
    url = '/index.html';
  }
  if(request.url == '/favicon.ico'){
    return response.writeHead(404);
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));
});
const PORT = process.env.PORT
// app.listen(3000);
app.listen(PORT);