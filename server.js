var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {
    "Content-Type": "text/json",
    "Access-Control-Allow-Origin": "*"
  });
  var todo = {
    todo: 'React 4 Life! ' + new Date(),
    complete: Math.random() < 0.5
  };
  response.write(JSON.stringify(todo)); 
  response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has started.");