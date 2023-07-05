const express = require('express');
const router = express.Router();

const {
    getGoals, 
    postGoals, 
    putGoals, 
    deleteGoals
} = require('../controller/goalController');

const {protect} = require('../middleware/authMiddleware'); 

router.route('/').get(protect, getGoals).post(protect, postGoals);
router.route('/:id').put(protect, putGoals).delete(protect, deleteGoals);


// router.get('/', getGoals)
// router.post('/', postGoals)

// router.put('/:id', putGoals)
// router.delete('/:id', deleteGoals)


module.exports = router;