const joi = require('joi');
const commnet = require('../models/comment/comment')
const mongodbIdPattern = /^[0-9a-fA-F]{24}$/;
const CommentDTO = require('../dto/comment')

const commentController = {
   async create(req, resp, next) {
      const createCommentSchema = joi.object({
         content: joi.string().required(),
         author: joi.string().regex(mongodbIdPattern).required(),
         blog: joi.string().regex(mongodbIdPattern).required()
      });

      const { error } = createCommentSchema.validate(req.body);

      if (error) {
         return next(error);
      }
      const { content, author, blog } = req.body;

      try {
         const newCommnet = new commnet({
            content, author, blog
         });
         await newCommnet.save();
      }
      catch (error) {
         return next(error)
      }

      return resp.status(201).json({ message: 'comment created' })
   },

   async getById(req, resp, next) {
      const getByIdSchema = joi.object({
         id: joi.string().regex(mongodbIdPattern).required()
      });
      const { error } = getByIdSchema.validate(req.params);

      if (error) {
         return next(error);
      }
      const { id } = req.params;

      let comments;

      try {
         comments = await commnet.find({ blog: id }).populate('author');

      }
      catch (error) {
         return next(error);
      }

      let commentsDto = [];

      for(let i= 0; i<comments.length; i++){
         const obj = new CommentDTO(comments[i]);
         commentsDto.push(obj);
      }


      return resp.status(200).json({ data: commentsDto });

   }



}

module.exports = commentController;