import {T} from '../libs/types/common'
import {Request, Response} from 'express'
import MemberService from '../models/Member.service';

const restaurantController : T = {};
restaurantController.goHome = (req: Request, res : Response)=>{
    try{
        console.log("GOHome");
        res.end("Home Page")
    }
    catch(err){
        console.log("ERROR GoHome", err);  
    }
}
restaurantController.getLogin = (req: Request, res : Response)=>{
    try{
        console.log("getLogin");
        res.end("Login Page")
    }
    catch(err){
        console.log("ERROR getLogin", err);  
    }
}
restaurantController.getSignup = (req: Request, res : Response)=>{
    try{
        console.log("getSignup");
        res.end("Signup Page")
    }
    catch(err){
        console.log("ERROR getSignup", err);  
    }
}

export default restaurantController