const express = require('express');
const router = express.Router();

const teachersController = require("../controllers/teachers");

/**
 * Get all teachers
 * URL: /teachers
 * Method: GET
 */
router.get('/', teachersController.getAllTeachers);

/**
 * Get teacher by id
 * URL: /teachers/:id
 * Method: GET
 */
router.get('/:id', teachersController.getTeacherById);

/**
 * Create teacher
 * URL: /teachers
 * Method: POST
 */
router.post('/', teachersController.createTeacher);

/**
 * Update teacher
 * URL: /teachers/:id
 * Method: PUT
 */
router.put('/:id', teachersController.updateTeacher);

/**
 * Patch teacher
 * URL: /teachers/:id
 * Method: PATCH
 */
router.patch('/:id', teachersController.patchTeacher);

/**
 * Delete teacher
 * URL: /teachers/:id
 * Method: DELETE
 */
router.delete('/:id', teachersController.deleteTeacher);



module.exports = router;
