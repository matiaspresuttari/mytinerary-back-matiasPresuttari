import express from "express"
import itineraryController from '../controllers/itinerary.controller.js'

const router = express.Router()

router.get('/',itineraryController.getItineraries)
router.post('/',itineraryController.createItinerary)
router.get('/:city',itineraryController.getItineraryByCityId)
router.get('/:id',itineraryController.getItineraryById)
router.put('/:id',itineraryController.updateItinerary)
router.delete('/:id',itineraryController.deleteItinerary)

export default router