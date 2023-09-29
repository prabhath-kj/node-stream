import express from "express";
import fs from "fs";
import statusMonitor from "express-status-monitor";

const PORT = 3000;
const app = express();

// Middleware for status monitor
app.use(statusMonitor());

// Route for reading file in a normal way
app.get("/normal", (req, res) => {
  fs.readFile("./sample.txt", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.send(data);
    }
  });
});

// Route for streaming file
app.get("/stream", (req, res) => {
  const stream = fs.createReadStream("./sample.txt", "utf-8");

  // Stream events
  stream.on("data", (chunk) => {
    res.write(chunk);
  });

  stream.on("end", () => {
    res.end();
  });

  stream.on("error", (err) => {
    console.error(err);
    res.status(500).send("Internal Server Error");
  });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
