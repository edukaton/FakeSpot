/* eslint-disable import/no-commonjs */
const jsonServer = require("json-server");
const path = require("path");
const express = require("express");
const axios = require("axios");

// const { questions } = require("./db.json");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use("/api", middlewares);
server.use("/api", jsonServer.bodyParser);

// Add custom routes before JSON Server router
server.post("/api/echo", (req, res) => {
  res.jsonp(req.body);
});

const questionsRawPromise = axios.get("https://sheetsu.com/apis/v1.0su/a41d458980b8");
questionsRawPromise.then(() => console.log("Questions fetched"));

(async () => console.log((await questionsRawPromise).data))();

const questionsAskedForUsers = {};

server.get("/api/question/:userToken", async (req, res) => {
  const questionsRaw = (await questionsRawPromise).data;

  if (!questionsAskedForUsers[req.params.userToken]) {
    questionsAskedForUsers[req.params.userToken] = [];
  }

  const questionsAskedById = questionsAskedForUsers[req.params.userToken];

  if (questionsAskedById.length === questionsRaw.length - 1) {
    questionsAskedForUsers[req.params.userToken] = [];
  }

  const availableQuestions = questionsRaw.filter(
    ({ id: qId }) => questionsAskedById.indexOf(qId) < 0,
  );

  if (availableQuestions.length <= 0) {
    questionsAskedForUsers[req.params.userToken] = [];
  }


  console.log(availableQuestions.length);
  const randomQuestion = availableQuestions[Math.floor(availableQuestions.length * Math.random())];

  const {
    id, lifeLine1, lifeLine2, isTrue, ...qs
  } = randomQuestion;

  questionsAskedForUsers[req.params.userToken].push(id);

  const question = {
    ...qs,
    isTrue: (isTrue === "TRUE"),
    lifeLines: [lifeLine1, lifeLine2],
    globalAnswers: {
      correct: Math.ceil(Math.random() * 200),
      incorrect: Math.ceil(Math.random() * 200),
    },
  };

  res.jsonp(question);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use("/api", (req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

// Use default router
server.use("/api", router);

server.use(express.static("dist"));
server.listen(3000, () => {
  console.log("JSON Server is running");
});
