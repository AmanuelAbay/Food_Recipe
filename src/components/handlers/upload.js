// const { gql } = require("graphql-tag");
// const apollo_client = require("../utils/apollo");
// const fs = require("fs");
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: "amanuel",
    api_key: "514354735915838",
    api_secret: "l6aAwXJXzac6Yp1_uwN9yhQNaak"
})


const upload = async(req, res) => {
    try {
        const { image, folder } = req.body.input;
        // let secure_urls = "";
        // console.log(image);
        // console.log(folder);
        let urls = "";

        let data = await cloudinary.uploader.upload(image, {
            unique_filename: true,
            discard_original_filename: true,
            folder: folder,
            timeout: 120000,
        });

        // secure_urls = data.secure_url;

        urls = data.url;

        // console.log(urls);

        // success
        return res.json({
            path: urls,
        });
    } catch (error) {
        console.error(error);

        res.status(500).send({
            message: "Error Uploading Files",
        });


    }
    //     // let imageBuffer = Buffer.from(base64str, 'base64');

    //     // // upload the file to somewhere( s3 or google Cloud)
    //     // fs.writeFileSync("../../../assets/images/foods" + name, imageBuffer, 'base64')

}

module.exports = upload