import express from "express";

const app = express();
const port: number = 3000;

app.get("/", (_re, res) => {
  res.json({
    status: 201,
    statusMessage: "OK",
  });
});

app.listen(port, () => {
  console.log(`Listening to ${port}...`);
});
