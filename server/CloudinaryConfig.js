import multer from "multer";
import {CloudinaryStorage} from "multer-storage-cloudinary";
import cloudinary from "cloudinary";

const cloudinaryV2 = cloudinary.v2;

cloudinaryV2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})


const storage = new CloudinaryStorage({
    cloudinary:cloudinaryV2,
    params:{
        folder:"products",
        allowed_formats:["jpg","png","jpeg","gif","webp","avif"]
    }
})


const uploads = multer({storage});

export default uploads;