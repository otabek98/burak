import express, { urlencoded }  from "express";
import path from 'path'
import router from './router'
import routerAdmin from './routerAdmin'
import morgan from 'morgan' //javob olish uchun ishlatamiz
import { MORGAN_FORMAT } from "./libs/config";

// 1- ENTRANCE // 
const app = express()

// public ni static formatiga aylantirib beradi
app.use(express.static(path.join(__dirname, "public"))) 
app.use(urlencoded({extended: true}))
app.use(express.json())
app.use(morgan(MORGAN_FORMAT)) // requestga javob qaytaradi 


// 2-SESSIONS
// 3-VIEWS
app.set("views", path.join(__dirname,'views'))
app.set("view engine",'ejs');

// 4- Routers
app.use("/admin", routerAdmin)  //  SPA EJS
app.use("/", router)  //  SPA REACT

export default app;