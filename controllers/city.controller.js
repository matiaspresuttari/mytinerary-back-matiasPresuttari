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
            queries.name = new RegExp(`^${req.query.name}`,'i')
        }

        try {
            const cities = await City.find(queries)
            return res.status(200).json({
                succes: true,
                cities: cities
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
            const city = await City.findById(req.params.id)

            if (city) {
                return res.status(200).json({
                    succes: true,
                    city: city
                })
            }
            return res.status(404).json({
                success:false,
                message:'Not found'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error'
            })
        }
    },
    modifyCity: async (req,res)=>{

    },
    deleteCity: async (req,res)=>{
        try {
            const newCity = await City.deleteOne(req.body)

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
}

export default controller