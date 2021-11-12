var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  if (req.url == "/welcome") {
    //check the URL of the current request

    // set response header
    res.writeHead(200, { "Content-Type": "text/plain" });

    // set response content
    res.write("Welcome to Dominos!");
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com",
      })
    );
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("OOPS page not found");
    res.end();
  }
}
module.exports = httpServer.listen(8081);