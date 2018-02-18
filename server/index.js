/* eslint-disable import/no-commonjs */
const jsonServer = require("json-server");
const path = require("path");

const { questions } = require("./db.json");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Add custom routes before JSON Server router
server.post("/echo", (req, res) => {
  res.jsonp(req.body);
});

server.get("/question", (req, res) => {
  res.jsonp(questions[Math.floor(questions.length * Math.random())]);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

// Use default router
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
