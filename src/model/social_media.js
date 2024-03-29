const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const social_mediaSchema = new Schema({
    userId:{
        type:String
    },
    twitter:{
        type:String
    },
    facebook:{
        type:String
    },
    instagram:{
        type:String
    },
    linkedin:{
        type:String
    },
    whatsup_number:{
        type:String
    }
    });

const Social_Media = mongoose.model("Social_media",social_mediaSchema);
module.exports = Social_Media;