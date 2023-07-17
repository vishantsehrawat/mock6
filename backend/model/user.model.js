const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    email: {
        type: String,
    },
    username : String,
    quizz: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quiz'
    }],
})

const UserModel = mongoose.model("user", userSchema)

module.exports = {
    UserModel
}