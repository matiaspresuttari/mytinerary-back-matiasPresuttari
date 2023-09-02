import Itinerary from "../models/Itinerary.js";

const controller = {
    getItineraries: async (req,res)=>{
        try {
            const itineraries = await Itinerary.find()
            if(itineraries.length > 0) {
                return res.status(200).json({
                    success: true,
                    itineraries: itineraries
                })
            }
            return res.status(404).json({
                success: false,
                message: 'Not found'
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error'
            })
        }
    },
    getItineraryByCityId: async (req,res)=>{
        try {
            const aItinerary = await Itinerary.findOne(req.query.city)

            return res.status(200).json({
                success: true,
                Itinerary: aItinerary
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error'
            })
        }
    },
    getItineraryById: async (req,res)=>{
        try {
            const aItinerary = await Itinerary.findById(req.params.id);
    
            if (!aItinerary) {
                return res.status(404).json({
                    success: false,
                    message: 'Itinerary not found'
                });
            }
    
            return res.status(200).json({
                success: true,
                Itinerary: aItinerary
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error'
            });
        }
    },
    createItinerary: async (req,res)=>{
        try {
            const newItinerary = await Itinerary.create(req.body)

        return res.status(201).json({
            success: true,
            message:'Itinerary created'
        })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error'
            })
        }
    },
    updateItinerary: async (req,res)=>{
        try {
            await Itinerary.updateOne({_id:req.params.id},req.body)

            return res.status(200).json({
                success: true,
                message:'Itinerary updated'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error'
            })
        }
    },
    deleteItinerary: async (req,res)=>{
        try {
            await Itinerary.deleteOne({_id:req.params.id})

            return res.status(201).json({
                success: true,
                message:'Itinerary deleted'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error'
            })
        }
    },
}

export default controller