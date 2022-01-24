import express from "express";
import cors from "cors";

const serv = express();
serv.use(express.json());
serv.use(cors());

serv.get("/", (req, res) => {
    res.send("Running the server");
});

const users = [];

serv.post("/sign-up", (req, res) => {
    users.push(req.body);
    res.send("OK");
});

const tweets = [];

serv.post("/tweets", (req, res) => {
    tweets.push(req.body);
    res.send("OK");
});

serv.get("/tweets", (req, res) => {
    const latestsTweets = [];

    for (let i = 0; i <= 10; i++) {
        latestsTweets.push(tweets[(tweets.length - 1) - i]);
    }

    res.send(latestsTweets);
})

serv.listen(5000);