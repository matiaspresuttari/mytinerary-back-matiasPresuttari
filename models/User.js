import { Schema, model, Types } from "mongoose";

let collection = 'users'
let schema = new Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    role: {type:String},
    image: {type:String}
},{
    timestamps:true
})

const User = model(collection,schema)

export default User