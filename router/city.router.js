import express from 'express'
import cityController from '../controllers/city.controller.js'

const router = express.Router()

router.get('/',(req,res)=>{
    res.json({
        cities:[
            {name:'Buenos Aires'},
            {name:'Paris'}
        ]
    })
})

router.get('/',cityController.getCities)
router.get('/',cityController.createCity)

export default router