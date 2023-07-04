const express = require('express');
const router = express.Router();
const authController = require('../controler/authController');
const auth = require('../middleware/auth');
const blogController = require('../controler/blogController');

// test 
router.get('/test', (req, resp)=>{
    resp.json({message : "Hello Routes.."})
})

// register
router.post('/register', authController.register)
// login 
router.post('/login', authController.login)

// logout 
router.post('/logout', auth, authController.logout)

// Refresh 
router.get('/refresh', auth, authController.refresh)

// blog 

// create 
router.post('/blog', auth, blogController.create);

// get all 
router.get('/blog/all', auth, blogController.getAll);

// get blog by id 
router.get('/blog/:id', auth, blogController.getById);

// update 
router.put('/blog', auth, blogController.update);


// delete 
router.get('/blog/:id', auth, blogController.delete);



module.exports = router;

