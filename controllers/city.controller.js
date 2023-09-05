import City from '../models/City.js'

const controller = {
    createCity: async (req,res)=>{
        try {
            const newCity = await City.create(req.body)

        return res.status(201).json({
            success: true,
            message:'City created'
        })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error'
            })
        }
    },
    getCities: async (req,res)=>{

        let queries = {}

        if(req.query.name){
            const name = req.query.name.replace(/^\s+/g, '');
            queries.name = new RegExp(`^${name}`,'i')
        }

        try {
            const cities = await City.find(queries)
            if(cities.length > 0) {
                return res.status(200).json({
                    success: true,
                    cities: cities
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
    getCityById: async (req,res)=>{
        try {
            const aCity = await City.findById(req.params.id)

                return res.status(200).json({
                    success: true,
                    city: aCity
                })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error'
            })
        }
    },
    updateCity: async (req,res)=>{
        try {
            await City.updateOne({_id:req.params.id},req.body)

            return res.status(200).json({
                success: true,
                message:'City updated'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error'
            })
        }
    },
    deleteCity: async (req,res)=>{
        try {
            await City.deleteOne({_id:req.params.id})

            return res.status(201).json({
                success: true,
                message:'City deleted'
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