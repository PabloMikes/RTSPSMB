const express = require('express');
const router = express.Router();


/**
 * Get all phones
 * URL: /phones
 * Method: GET
 */
router.get('/', (req, res) => {
  res.send("GET ALL PHONES");
});

/**
 * Get phone by id
 * URL: /phones/:id
 * Method: GET
 */
router.get('/:id', (req, res) => {
  res.send(`Phone: ${req.params.id}`);
});

/**
 * Create phone
 * URL: /phones
 * Method: POST
 */
router.post('/', (req, res) => {
  res.send("CREATED PHONE");
});

/**
 * Update phone
 * URL: /phones/:id
 * Method: PUT
 */
router.put('/:id', (req, res) => {
  res.send(`Updated phone: ${req.params.id}`);
});

/**
 * Patch phone
 * URL: /phones/:id
 * Method: PATCH
 */
router.patch('/:id', (req, res) => {
  res.send(`Patched phone: ${req.params.id}`);
});

/**
 * Delete phone
 * URL: /phones/:id
 * Method: DELETE
 */
router.delete('/:id', (req, res) => {
  res.send(`Deleted phone: ${req.params.id}`);
});



module.exports = router;
