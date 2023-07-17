const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
    creator: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    questions: [
        {
            title: {
                type: String,
                required: true
            },
            options: {
                //used array for multiple options 
                type: [String],
                required: true
            },
            correctOptions: {
                //similarly multiple correct answers can be there so used array 

                type: [Number],
                required: true
            }
        }
    ]
});

const QuizModel = mongoose.model('quiz', quizSchema);

module.exports = {
    QuizModel
};