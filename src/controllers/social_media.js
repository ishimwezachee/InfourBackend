const Social_media = require("../model/social_media");
// ========================================================= create
exports.create_social_media =(req,res,next)=>{
    const {userId} = req.tokenData
 const social_media = new Social_media({
     userId,
    twitter:req.body.twitter,
    facebook:req.body.facebook,
    instagram:req.body.instagram,
    linkedin:req.body.linkedin,
    whatsup_number:req.body.whatsup_number
 });

 social_media
 .save()
 .then(result=>{
     res.status(200).json(result)
 })
 .catch(err=>{
     res.status(400).json({
         error:err
     });
 })

}
//========================================================== get

exports.get_One_social_media = (req,res,next)=>{
    const {userId} = req.params;
    Social_media
    .findOne({userId})
    .then( result=>{
        res.status(200).json(result)
    })
    .catch(error=>{
        res.status(400).json({
            error:error
        })
    })
}
//================================================== update
exports.modify_social_media = (req,res,next)=>{
    let body = {}
       if (req.body.twitter) {
           body["twitter"] = req.body.twitter
       }
       if (req.body.facebook) {
           body["facebook"] = req.body.facebook
       }
       if (req.body.instagram ) {
        body["instagram"] = req.body.instagram
    }
    if (req.body.linkedin) {
        body["linkedin"] = req.body.linkedin
    }
    if (req.body.whatsup_number) {
        body["whatsup_number"] = req.body.whatsup_number
    }
      console.log(body)
      let _id = req.params.id;
      console.log(_id)
      Social_media.findOneAndUpdate({ _id }, body)
      .then(result=>{
          console.log(body)
       res.status(200).json(result)
   })
   .catch(err=>{
       res.status(400).json({
           error:err
       })
   })
   }
//==================================================== delete
exports.delete_social_media = (req,res,next)=>{
    Social_media.deleteOne({_id:req.params.id})
    .then( deletedData=>{
        res.status(200).json({
            message:"data successfully deleted",
            data:deletedData
        })
    }).catch(
      error =>{
          res.status(400).json({
              error:error
          })
      }
  )
  }