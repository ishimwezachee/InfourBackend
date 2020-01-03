//============================================================== variables;
const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require("cors");
const Routes = require('./src/routes/route');
const imageRoute = require('./src/routes/imageRoute')
require('dotenv').config()
// const fileUpload = require("express-fileupload");

// ======================================================== middlewares
// app.use(fileUpload({useTempFiles:true}));
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));
app.use(bodyParser.json({limit:'10mb',extended:true}))
app.use(cors());

// =========================================================== routes;
app.use("/",(req,res)=>{
    res.status(200).send('welcome to the infour app')
});
app.use('/api/image',  imageRoute)
app.use('/api',Routes);
// //=========================================================== connect mongdb;

// mongoose.connect('mongodb://localhost:27017/Infour',
//     {
//         useCreateIndex: true,
//         useNewUrlParser: true
//     }
//     , function () {
//         console.log("database connected success")
//     })

//=========================================================== connect mongdb_ATLAS;


mongoose.connect(process.env.MONGO_ATLAS_DB_URL,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log('Connection to the Atlas Cluster is successful!')
  })
  .catch( (err) => console.error(err));


//======================================================= port 
const port = process.env.PORT || 3500;
app.listen(port,()=> console.log(`app is running on port ${port}`));