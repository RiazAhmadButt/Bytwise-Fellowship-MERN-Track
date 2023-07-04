const joi = require('joi');
const fs = require('fs');
const blog = require('../models/blog/blog');
const { BACKEND_SERVER_PATH } = require('../config/index');
const BlogDTO = require('../dto/blog')

const blogController = {

    async create(req, resp, next) {
        // validate req body 
        // handle photo storage , naming 
        // add to db
        // return 

        // client side > base64 encoded string > decode > store > save 

        const mongodbIdPattern = /^[0-9a-fA-F]{24}$/;

        const createBlogSchema = joi.object({
            title: joi.string().required(),
            author: joi.string().regex(mongodbIdPattern).required(),
            content: joi.string().required(),
            photo: joi.string().required()
        });
        const { error } = createBlogSchema.validate(req.body);
        if (error) {
            return next(error);
        };

        const { title, author, content, photo } = req.body;

        // read as buffer 
        const buffer = Buffer.from(photo.replace(/^data:image\/(png|jpg|gpeg);base64,/, ''), 'base64');

        // allot a random name 

        const imagePath = `${Date.now()}-${author}`;
        // save locally 
        try {
            fs.writeFileSync(`storage/${imagePath}`, buffer);
        }
        catch (error) {
            return next(error);
        }

        // save blog in db 
        let newBlog;
        try {
            newBlog = new Blog({
                title,
                author,
                content,
                photoPath: `${BACKEND_SERVER_PATH}/storage/${imagePath}`
            });
            await newBlog.save();
        }
        catch (error) {
            return next(error);
        }

        const blogDto = new BlogDTO(newBlog)
        resp.status(201).json({ blog: blogDto });
    },
    async getAll(req, resp, next) {
        try {
            const blogs = await Blog.find({});
            const blogsDto = [];

            for (let i = 0; i < blogs.length; i++) {
                const dto = new BlogDTO(blogs[i]);
                blogsDto.push(dto);


            }
            return resp.status(200).json({ blogs: blogsDto });

        }
        catch (error) {
            return next(error)
        }
    },
    async getById(req, resp, next) {
        // validate id 
        // response 
        const getByIdSchema = joi.object({
            id: joi.string().regex(mongodbIdPattern).required()
        });
        const { error } = getByIdSchema.validate(req.params);

        if (error) {
            return next(error)
        }

        let blog;
        const {id} = req.params;
        try {
            blog = await Blog.findOne({ _id: id });
        }
        catch (error) {
            return next(error)
        }

        return resp.status(200).json({ blog: blogDto })

    },
    async update(req, resp, next) { },
    async delete(req, resp, next) { },


}


module.exports = blogController;