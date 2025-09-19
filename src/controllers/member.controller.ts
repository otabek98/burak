import {T} from '../libs/types/common'
import {Request, Response} from 'express'


const memberController : T = {};
memberController.goHome = (req: Request, res : Response)=>{
    try{
        res.end("Home Page")
    }
    catch(err){
        console.log("ERROR GoHome", err);  
    }
}
memberController.getLogin = (req: Request, res : Response)=>{
    try{
        res.end("Login Page")
    }
    catch(err){
        console.log("ERROR getLogin", err);  
    }
}
memberController.getSignup = (req: Request, res : Response)=>{
    try{
        res.end("Signup Page")
    }
    catch(err){
        console.log("ERROR getSignup", err);  
    }
}

export default memberController