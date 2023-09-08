import express from 'express'
import cityController from '../controllers/city.controller.js'
import passport from '../middlewares/passport.js'

const router = express.Router()

router.post('/',passport.authenticate('jwt',{session:false}),cityController.createCity)
router.get('/',cityController.getCities)
router.get('/:id',cityController.getCityById)
router.put('/:id',passport.authenticate('jwt',{session:false}),cityController.updateCity)
router.delete('/:id',passport.authenticate('jwt',{session:false}),cityController.deleteCity)

export default router

