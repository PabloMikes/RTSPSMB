const express = require('express');
const router = express.Router();

const carsController = require("../controllers/cars");

/**
 * Get all cars
 * URL: /cars
 * Method: GET
 */
router.get('/', carsController.getAllCars);

/**
 * Get car by id
 * URL: /cars/:id
 * Method: GET
 */
router.get('/:id', carsController.getCarById);

/**
 * Create car
 * URL: /cars
 * Method: POST
 */
router.post('/', carsController.createCar);

/**
 * Update car
 * URL: /cars/:id
 * Method: PUT
 */
router.put('/:id', carsController.updateCar);

/**
 * Patch car
 * URL: /cars/:id
 * Method: PATCH
 */
router.patch('/:id', carsController.patchCar);

/**
 * Delete car
 * URL: /cars/:id
 * Method: DELETE
 */
router.delete('/:id', carsController.deleteCar);



module.exports = router;
