const express = require('express');
const router = express.Router();

const lunchesController = require("../controllers/lunches");

/**
 * Get all lunches
 * URL: /lunches
 * Method: GET
 */
router.get('/', lunchesController.getAllLunches);

/**
 * Get lunch by id
 * URL: /lunches/:id
 * Method: GET
 */
router.get('/:id', lunchesController.getLunchById);

/**
 * Create lunch
 * URL: /lunches
 * Method: POST
 */
router.post('/', lunchesController.createLunch);

/**
 * Update lunch
 * URL: /lunches/:id
 * Method: PUT
 */
router.put('/:id', lunchesController.updateLunch);

/**
 * Patch lunch
 * URL: /lunches/:id
 * Method: PATCH
 */
router.patch('/:id', lunchesController.patchLunch);

/**
 * Delete lunch
 * URL: /lunches/:id
 * Method: DELETE
 */
router.delete('/:id', lunchesController.deleteLunch);



module.exports = router;
