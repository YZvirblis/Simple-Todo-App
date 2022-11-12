import express from "express"
import cors from "cors"
import initializeApiRoutes from "./api/routes"
import mongoose from "mongoose"
import 'dotenv/config';

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use("/api/", initializeApiRoutes());

mongoose.connect(process.env.MONGO_URL || "mongodb+srv://todopublic:FJRpYDrDhMaIcvaT@cluster0.7lmxmff.mongodb.net/?retryWrites=true&w=majority").then((dbRes) => {
    console.log("Connecnted to DB (MONGO)")
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`)
    })
}). catch((err) => {
    console.error(err)
})