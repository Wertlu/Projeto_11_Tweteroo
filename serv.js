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
    if ((req.body.username && req.body.username !== "") || (req.body.avatar && req.body.avatar !== "")) {
        users.push(req.body);
        res.send("OK");
    } else {
        res.status(400).send("Todos os campos são obrigatórios!");
    }
});

const tweets = [];

serv.post("/tweets", (req, res) => {
    if ((req.body.username && req.body.username !== "") || (req.body.tweet && req.body.tweet !== "")) {
        const tweet = {
            username: req.body.username,
            avatar: users.find(user => user.username === req.body.username).avatar,
            tweet: req.body.tweet
        };
        tweets.push(tweet);
        res.send("OK");
    }else{
        res.status(400).send("Todos os campos são obrigatórios!");
    }
});

serv.get("/tweets", (req, res) => {

    const latestsTweets = [];

    if (tweets.length >= 10) {
        for (let i = 0; i <= 10; i++) {
            latestsTweets.push(tweets);
        }
    } else {
        for (let i = 0; i <= tweets.length; i++) {
            latestsTweets.push(tweets);
        }
    }

    res.send(latestsTweets);
})

serv.listen(5000);