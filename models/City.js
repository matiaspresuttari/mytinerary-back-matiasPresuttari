import { Schema,model,Types } from "mongoose";

let collection = 'cities'
let schema = new Schema({
    name:{type:String,required:true},
    photo:{type:String,required:true},
    country:{type:String,required:true},
    itineraries: [{type: Types.ObjectId, ref:'itineraries'}]
},{
    timestamps:true
})

const City = model(collection,schema)

export default City