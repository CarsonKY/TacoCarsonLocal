import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
    customer: {
    type:String,
    required: true,
    maxlength: 60,
},
address: {
type: String,
    required: true,
    maxlength: 200,
},

total: {
    type:Number,
        required: true,
        
    },
status:{
    type:Number,
    required: true,
    default: 0,
},

method:{
    type:Number,
    required: true,
    
},


}, {timestamps:true}
);

// If already open don't reopen

export default mongoose.models.Order || 
    mongoose.model("Order", OrderSchema)

{timestamps: true }
