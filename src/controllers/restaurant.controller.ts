import {T} from '../libs/types/common'
import {Request, Response} from 'express'


const restaurantController : T = {};
restaurantController.goHome = (req: Request, res : Response)=>{
    try{
        res.end("Home Page")
    }
    catch(err){
        console.log("ERROR GoHome", err);  
    }
}
restaurantController.getLogin = (req: Request, res : Response)=>{
    try{
        res.end("Login Page")
    }
    catch(err){
        console.log("ERROR getLogin", err);  
    }
}
restaurantController.getSignup = (req: Request, res : Response)=>{
    try{
        res.end("Signup Page")
    }
    catch(err){
        console.log("ERROR getSignup", err);  
    }
}

export default restaurantController