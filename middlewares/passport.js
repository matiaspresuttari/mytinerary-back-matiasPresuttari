import passport from "passport";
import { Strategy,ExtractJwt } from "passport-jwt";
import User from "../models/User.js";

export default passport.use(
    new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET_TOKEN
        },
        async (jwt_payload,done)=>{
            try {
                //busca si el usuario existe y continua al siguiente middleware
                const user = await User.findOne({_id:jwt_payload.id},'-password')

                if(user){
                    //el null significa que no hay errores
                    return done(null,user)
                }
                else{
                    return done(null,false)
                }
            } catch (error) {
                console.log(error);
                return done(error,false)
            }
        }
    )
)