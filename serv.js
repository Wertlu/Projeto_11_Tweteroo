import express, { json } from "express";

const serv = express();
serv.use(json());

const users = [];

serv.post('/sign-up', (req, res) => {
    users.push(req.body);
    res.send("OK");
})

serv.listen(5000);