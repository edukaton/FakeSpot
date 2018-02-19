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

server.get("/api/question", async (req, res) => {
  const questionsRaw = (await questionsRawPromise).data;

  const questions = questionsRaw.map((q) => {
    const {
      lifeLine1, lifeLine2, isTrue, ...qs
    } = q;

    return {
      ...qs,
      isTrue: (isTrue === "TRUE"),
      lifeLines: [lifeLine1, lifeLine2],
      globalAnswers: {
        correct: Math.ceil(Math.random() * 200),
        incorrect: Math.ceil(Math.random() * 200),
      },
    };
  });

  const randomQuestion = questions[Math.floor(questions.length * Math.random())];
  res.jsonp(randomQuestion);
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
