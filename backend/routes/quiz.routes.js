const express = require("express");
const { QuizModel } = require("../model/quiz.model");
const quizRouter = express.Router();

quizRouter.use(express.json())

quizRouter.post('/add', async (req, res) => {
    try {
        const { creator, title, description, questions } = req.body;

        const newQuiz = new QuizModel({
            creator,
            title,
            description,
            questions
        });

        await newQuiz.save();

        res.status(200).json({ msg: 'quiz saved' });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});


module.exports = {
    quizRouter
}

