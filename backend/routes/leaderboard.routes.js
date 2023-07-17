const express = require("express");
const { QuizModel } = require("../model/quiz.model");
const leaderboardRouter = express.Router();

leaderboardRouter.use(express.json())


leaderboardRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const quiz = await QuizModel.findById({ _id: id });
        if (!quiz) {
            return res.status(404).send({ msg: 'Quiz not found' });
        }
        res.status(200).send(quiz);
    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
});

module.exports = {
    leaderboardRouter
}

