const product = require("../models/Product")
const cloudinary = require("../config/cloudinary")

exports.CreateProduct = async (req, res, next)=>{
  try {
    const result = await cloudinary.uploader.upload(
        req.files.image.tempFilePath,
        (err, result) => {
          try {
            return result;
          } catch (err) {
            return err;
          }
        }
      );

    const {name, description, price} = req.body
    const Product = await product.create({
        name,
        description,
        price,
        image: {
            public_id: result.public_id,
            url: result.secure_url,
        }
    })
    // console.log(Product)
    res.status(200).send("Product- has been created.")
}catch(err){
   next(err)
}
}


exports.GetallProuct = async (req, res, next) =>{
  try {
    const GetallFood = await product.find(req.query)
    res.status(200).json({
      Message: "All Foods",
      data: {GetallFood}
    })
  } catch (err) {
    next(err)
  }
} 

exports.DeleteProuct = async (req, res, next) =>{
  try {
    const GetallFood = await product.findByIdAndDelete(req.params.id)
    res.status(204).json({
      Message: "Food Deleted",
    })
  } catch (err) {
    next(err)
  }
} 