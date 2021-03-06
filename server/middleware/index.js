import jwt from "jsonwebtoken";
const secret="secret";

exports.token_verification=(req,res,next)=>{
    const token = req.headers['access-token'] || req.headers.authorization;
    if(!token){
        return res.status(401).json({
            status:401,
            error:"enter the token"
        });
    };
    
    jwt.verify(token,"secretkey",(error,response)=>{
        
        if(error){
            return res.status(400).json({
                status:400,
                error:"invalid token"
            });
        };        
        next();

    });
};