// const http = require("http");
// after app.listen(3000) we can comment out http

const express = require("express"); //imports express
const bodyParser = require("body-parser"); //imports body-parser

const app = express(); // runs express as a function

// On the course 
// app.use(bodyParser.urlencoded({ extended: false })); 
// Since express 4.16.0, body-parser has been added to, so we can use the following code:
app.use(bodyParser.urlencoded({ extended: true }));
// this function we have to execute to register the middleware

// use allows use to add a new middleware function
// app.use((req, res, next) => {
//   console.log("In the middleware");
//   next();
// });
// next() allows  to request to continue to the next middleware in line

// app.use("/", (req, res, next) => {
//   console.log("Ths always runs");
//   next();
// });

// app.use("/add", (req, res, next) => {
//   console.log("In another middleware Add Page");
//   res.send("<h1>The add Page</h1>");
// });
// why "/add" path will not interfare the "/" path
// because in "/add" I didn't use the next() function
// which should have been done if I have to use the next function

app.use("/add-product", (req, res, next) => {
  //   console.log("In another middleware Form Page");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

// app.use("/product", (req, res, next) => {
app.post("/product", (req, res, next) => {
  //   console.log("In another middleware Product Page");
  console.log(req.body);
  // request gives us this body convenience property here
  // but by default, request doesn't try to parse the incoming request body
  // to do that we have to install middleware 3rd party package (body-parser)
  res.redirect("/");
  // res.redirect("/end");
});

// done by me.. Not in the course
// app.use("/end", (req, res, next) => {
//   res.send("<h1>Added Text!</h1>");
// });

app.use("/", (req, res, next) => {
  //   console.log("Hello from Express!");
  res.send("<h1>Hello from Express!</h1>");
});
// send() allows us to send a response

// const server = http.createServer(app);
// server.listen(3000);
// instead of these two lines... we are doing app.listen

app.listen(3000);

// why --save to install express
// because it's a production dependency
// we don't use this as tool it will be an integral part of the application
// we ship and therefore, it definitely also has to be install on any server
// or any computer where we run our application once we deploy it
// it is a major piece of our application

// middleware
// in the end middleware means that an incoming request
// is automatically funneled through a bunch of functions
// so instead of just having one request handler, you will
// actually have a possibility of hooking in multiple functions
// which the request will go through until you send a response.
// This allows you to split your code into multiple blocks or pieces 
// instead of having one huge function that does everything