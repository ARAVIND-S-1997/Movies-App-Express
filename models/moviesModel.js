import mongoose from "mongoose";

const schema=mongoose.Schema;

const movieSchema=new schema({
    name:{
        type:String,
        required:true
    },
    poster:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    summary:{
        type:String,
        required:true
    },
    trailer:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    }
})


export const movies=mongoose.model("movies",movieSchema);