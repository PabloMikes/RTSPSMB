const express = require('express');
const router = express.Router();

const newsController = require("../controllers/news");

/**
 * Get all news
 * URL: /news
 * Method: GET
 */
router.get('/', newsController.getAllNews);

/**
 * Get news by id
 * URL: /news/:id
 * Method: GET
 */
router.get('/:id', newsController.getNewsById);

/**
 * Create news
 * URL: /news
 * Method: POST
 */
router.post('/', newsController.createNews);

/**
 * Update news
 * URL: /news/:id
 * Method: PUT
 */
router.put('/:id', newsController.updateNews);

/**
 * Patch news
 * URL: /news/:id
 * Method: PATCH
 */
router.patch('/:id', newsController.patchNews);

/**
 * Delete news
 * URL: /news/:id
 * Method: DELETE
 */
router.delete('/:id', newsController.deleteNews);



module.exports = router;
