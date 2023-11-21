const upload = require('../middlewares/multer');
const cloudinary = require('../config/cloudinaryConfig');
const Blogs = require('../models/blogModel');

const router = require('express').Router();

router.post("/add-blogs", async (req, res) => {
    try {
        const newblogs = new Blogs(req.body);
        await newblogs.save();
        res.send({
            success: true,
            message: "blogs created successfully"
        })

    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
})

router.post('/upload', upload.single('blog_thumbnail'), function (req, res) {
    cloudinary.uploader.upload(req.file.path, {
        folder: "blogsImages",
    }, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                message: "Error"
            })
        }

        res.status(200).json({
            success: true,
            message: "Your Image Uploaded Successfully!",
            data: result
        })
    })
});


router.get("/get-blogs", async (req, res) => {
    try {
        const blogs = await Blogs.find();
        res.send({
            success: true,
            data: blogs,
            message: "blogs fetched successfully"
        })

    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
})

//get blogs by Id
router.get("/get-blogs-by-id/:id", async (req, res) => {
    try {
        const id = req.params.id;
        console.log("id : ", id)
        const blogs = await Blogs.findById(id);
        res.send({
            success: true,
            data: blogs,
            message: "Unit blogs fetched successfully"
        })

    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
})

module.exports = router;
