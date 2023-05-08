const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use('/auth', authRouter)
app.use(express.static("public"))


const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://nowy:wwwww@cluster0.qvxwnw9.mongodb.net/test`)
        app.listen(PORT, () => console.log(`Server starting on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}



start() 