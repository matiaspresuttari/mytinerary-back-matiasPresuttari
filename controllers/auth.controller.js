import crypto from 'crypto'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const controller = {
    signup: async (req,res,next) => {
        try {
            req.body.verified_code = crypto.randomBytes(10).toString('hex')
            req.body.password = bcryptjs.hashSync(req.body.password,10) //se ejecuta el codigo luego de hashear
        
            const user = await User.create(req.body)

            return res.status(201).json({
                success: true,
                message: 'User registered!'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error'
            })
        }
    },
    signin: async (req,res,next) => {
        try {
            let user = await User.findOneAndUpdate(
                {email: req.user.email},
                {online: true},
                {new: true}
            )

            const token = jwt.sign(
                {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    photo: user.photo
                },
                process.env.SECRET_TOKEN,
                {expiresIn: "10h"}
            )

            user.password=null;
            return res.status(200).json({
                success: true,
                message: 'User signed in!',
                response: {
                    token,
                    user: {
                        email: user.email,
                        name: user.name,
                        photo: user.photo
                    }
                }
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error'
            })
        }
    },
    signout: async (req,res,next) => {
        try {
            const user = await User.findOneAndUpdate(
                {email: req.user.email},
                {online: false},
                {new: true}
            )

            return res.status(200).json({
                success: true,
                message: 'User loged out'
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error'
            })
        }
    }
}

export default controller;