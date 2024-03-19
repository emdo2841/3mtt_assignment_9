const http = require("http");

// import author and book module
const { authors, books } = require("./library");

console.log(authors);
console.log(books);

const HOSTNAME = "127.0.0.1";
const PORT = 4000;


// this functions routes this server
function requestHandler(req, res) {
    const emma = req.url
  console.log(emma);
//   switch (emma) {
//     case "/books":
//       res.writeHead(200)
//       res.end(JSON.stringify(books)
//       break;
//     case "/authors":
    //   res.writeHead(200)
//       res.end(JSON.stringify(authors)
//       break;
//     default:
//       res.writeHead(404)
//       res.end('Unsupported')
//       break;
//   }
  if (emma === "/books") {
    res.writeHead(200)
    res.end(JSON.stringify(books));
  } else if (emma === "/authors") {
    res.writeHead(200)
    res.end(JSON.stringify(authors));
  } else {
    res.writeHead(404)
    res.end('route not supported');
  }
}
const server = http.createServer(requestHandler);

server.listen(PORT, HOSTNAME, () => {
  console.log(`server started successfully @ http://${HOSTNAME}:${PORT}`);
});
