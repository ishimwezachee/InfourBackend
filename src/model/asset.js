const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assetSchema = new Schema({
    asset_name:{
        type:[String]
    },
    country:{
        type:String
    },
    province:{
        type:String
    },
    district:{
        type:String
    },
    street:{
        type:String
    }

});


const Asset = mongoose.model("Asset",assetSchema);
module.exports = Asset;