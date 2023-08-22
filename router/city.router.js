import express from 'express'
import cityController from '../controllers/city.controller.js'

const router = express.Router()

router.post('/',cityController.createCity)
router.get('/',cityController.getCities)
router.get('/:id',cityController.getCityById)
router.put('/:id',cityController.updateCity)
router.delete('/:id',cityController.deleteCity)

export default router