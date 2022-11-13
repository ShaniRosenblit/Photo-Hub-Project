const { AsyncNedb } = require('nedb-async');
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs').promises;

const dbFileImages = new AsyncNedb({
    filename: 'dbImagesJason.db',
    autoload: true,
});


router.post('/addImage', (async (req, res) => {
    var imagePath = path.join('dbPhotos', `${req.body.image.caption}.jpg`);
    let image = req.body.image;
    bufferToImageInDbFile(image.src, imagePath);
    image.src = imagePath;
    await dbFileImages.asyncInsert(image);
    res.json(image);
})) 

router.get('/getAllImgs', (async (req, res) => {
    try{
        let images =await dbFileImages.asyncFind({})
        images = await getBase64Images(images);
        res.json(images);
      } catch (err){
        console.log(err);
      }
}));

router.post('/update', (async (req, res) => {
  try{
let upPhoto = req.body.image;
let upPhotoInDb = await dbFileImages.asyncFind({_id : upPhoto._id});
await dbFileImages.asyncUpdate({
  _id : upPhotoInDb[0]._id
},
{
  caption :upPhoto.caption,
  location : upPhoto.location,
  categories :upPhoto.categories,
  favorite: upPhoto.favorite,
  privateMode : upPhoto.privateMode,
  latPointLoctoin : upPhoto.latPointLoctoin,
  lngPointLoctoin : upPhoto.lngPointLoctoin,
  src: upPhotoInDb[0].src
});
}catch(err){
  console.log(err);
}
}));


const bufferToImageInDbFile = async (imageBase64, path) => {
  let res = imageBase64.replace(/^data:image\/\w+;base64,/, "");
  let buf = Buffer.from(res, "base64");
  await fs.writeFile(path, buf);
}; 

getBase64Images = async (images) => {
    const promises = images.map(async (image) => {
      const body = await fs.readFile(image.src).catch((err)=> console.log(err));
      const imageBase64 = body.toString("base64");
      image.src = 'data:image/jpeg;base64,'+imageBase64;
      return image;
    });
    const res = await Promise.all(promises);
    return res;
  }




module.exports = router;