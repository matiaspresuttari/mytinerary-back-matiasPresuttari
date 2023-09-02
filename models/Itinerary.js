import { Schema,model,Types } from "mongoose";

let collection = 'itineraries'
let schema = new Schema({
    name:{type:String,required:true},
    photo:{type:String,required:true},
    userName:{type:String,required:true},
    userPhoto:{type:String,required:true},
    price:{type:String,required:true},
    duration:{type:String,required:true},
    likes:{type:String,required:true},
    hashtags:{type:String,required:true},
    comments:{type:String},
    city: {type: Types.ObjectId, ref: "cities"}
},{
    timestamps:true
})

const Itinerary = model(collection,schema)

export default Itinerary