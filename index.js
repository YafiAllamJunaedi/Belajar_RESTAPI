import express from "express";
// import db from "./koneksi.js";
import bodyParser from "body-parser";
import router from "./routes/route.js";
import dotenv from "dotenv"
const  app = express()
const PORT = process.env.PORT
dotenv.config()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/", router);   

app.listen(PORT, () => {
    console.log('server berjalan di http://localhost:' + PORT)
})