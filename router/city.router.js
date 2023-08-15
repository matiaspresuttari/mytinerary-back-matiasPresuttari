import express from 'express'
import cityController from '../controllers/city.controller.js'

const router = express.Router()

const {getCities, createCity, getCityById} = cityController

router.get('/',(req,res)=>{
    res.json({
        cities:[
            {name:'Buenos Aires'},
            {name:'Paris'}
        ]
    })
})

router.get('/',cityController.getCities)
router.get('/:id',getCityById)
router.get('/',cityController.createCity)

export default router