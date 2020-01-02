//============================================================== variables;
const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require("cors");
const Routes = require('./src/routes/route');
const imageRoute = require('./src/routes/imageRoute')
// const fileUpload = require("express-fileupload");


// ======================================================== middlewares
// app.use(fileUpload({useTempFiles:true}));
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));
app.use(bodyParser.json({limit:'10mb',extended:true}))
app.use(cors());

// =========================================================== routes;
app.use("/welcome",(req,res)=>{
    res.status(200).send('welcome')
});
app.use('/api/image', imageRoute)
app.use('/api',Routes);
// //=========================================================== connect mongdb;

mongoose.connect('mongodb://localhost:27017/Infour',
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
    , function () {
        console.log("database connected success")
    })

//=========================================================== connect mongdb_ATLAS;

// mongoose.connect('mongodb://zachee:'+ process.env.MONGO_ATLAS_PW +'@cluster0-shard-00-00-wzg27.mongodb.net:27017,cluster0-shard-00-01-wzg27.mongodb.net:27017,cluster0-shard-00-02-wzg27.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then( () => {
//     console.log('Connection to the Atlas Cluster is successful!')
//   })
//   .catch( (err) => console.error(err));


//======================================================= port 
const port = process.env.PORT || 3500;
app.listen(port,()=> console.log(`app is running on port ${port}`));