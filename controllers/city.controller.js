import City from '../models/City.js'

const controller = {
    getCities: (req,res)=>{
        console.log('Se ejecuto controlador de getCities');

        res.send('getCities')
    },
    createCity: async (req,res)=>{
        const newCity = await City.create({
            'name':'Buenos Aires'
        })

        return res.status(201).json({
            success:true,
            message:'City created'
        })
    }
}

export default controller