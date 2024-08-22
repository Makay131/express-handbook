import express from "express";

const app = express();

const PORT = process.env.PORT || 1453;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});