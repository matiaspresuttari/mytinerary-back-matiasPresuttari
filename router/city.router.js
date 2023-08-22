import express from 'express'
import cityController from '../controllers/city.controller.js'

const router = express.Router()

router.post('/',cityController.createCity)
router.get('/',cityController.getCities)
router.get('/:id',cityController.getCityById)
router.post('/',cityController.modifyCity)
router.post('/',cityController.deleteCity)

export default router