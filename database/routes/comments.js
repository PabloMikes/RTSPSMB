const express = require('express');
const router = express.Router();

const commentsController = require("../controllers/comments");

/**
 * Get all comments
 * URL: /comments
 * Method: GET
 */
router.get('/', commentsController.getAllComments);

/**
 * Get comment by id
 * URL: /comments/:id
 * Method: GET
 */
router.get('/:id', commentsController.getCommentById);

/**
 * Create cacommentr
 * URL: /comments
 * Method: POST
 */
router.post('/', commentsController.createComment);

/**
 * Update comment
 * URL: /comments/:id
 * Method: PUT
 */
router.put('/:id', commentsController.updateComment);

/**
 * Patch comment
 * URL: /comments/:id
 * Method: PATCH
 */
router.patch('/:id', commentsController.patchComment);

/**
 * Delete comment
 * URL: /comments/:id
 * Method: DELETE
 */
router.delete('/:id', commentsController.deleteComment);



module.exports = router;
