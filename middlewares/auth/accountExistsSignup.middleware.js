import User from "../../models/User.js"

export const accountExistsSignup = async (req,res,next)=>{
    const user = await User.findOne({email: req.body.email})

    if(user){
        return res.status(400).json({ //tambien puedo devolver un string
            success: false,
            message: 'User already exists'
        })
    }

    return next()
}