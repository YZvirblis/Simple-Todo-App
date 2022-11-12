import express from "express"
import cors from "cors"
import initializeApiRoutes from "./api/routes"

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
app.use("/api/", initializeApiRoutes());


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})