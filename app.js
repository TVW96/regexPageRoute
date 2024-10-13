// app.js

// Add your code here
import express from 'express';
const app = express();

// home page route
app.get("/", (req, res) => {
    res.send("home page.")
});

// Regular expression route to match /user and /username
app.get(/user(name)?/, (req, res) => {
    res.send('Matched either user or username route!');
});

app.use((req, res) => {
    res.status(404).send("404 - Not Found")
});


export default app;
