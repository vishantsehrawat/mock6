const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
const cors = require('cors');
const { quizRouter } = require("./routes/quiz.routes");
require("dotenv").config();
const app = express()

app.use(cors())
app.use(express.json());
app.use("/user", userRouter)
app.use("/quiz", quizRouter)


app.get("/", (req, res) => {
    res.send("home route")
})

app.listen(8080, async () => {
    try {
        await connection
        console.log("server started at 8080")
        console.log("connected to db ")
    } catch (error) {
        console.log(error.message)
    }
})