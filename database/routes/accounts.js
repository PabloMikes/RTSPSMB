const express = require('express');
const router = express.Router();

const accountsController = require("../controllers/accounts");

/**
 * Get all accounts
 * URL: /accounts
 * Method: GET
 */
router.get('/', accountsController.getAllAccounts);

/**
 * Check account
 * URL: /accounts
 * Method: USE
 */
router.use("/", accountsController.checkAccount);

/**
 * Get account by id
 * URL: /accounts/:id
 * Method: GET
 */
router.get('/:id', accountsController.getAccountById);

/**
 * Create account
 * URL: /accounts
 * Method: POST
 */
router.post('/', accountsController.createAccount);

/**
 * Update account
 * URL: /accounts/:id
 * Method: PUT
 */
router.put('/:id', accountsController.updateAccount);

/**
 * Patch account
 * URL: /accounts/:id
 * Method: PATCH
 */
router.patch('/:id', accountsController.patchAccount);

/**
 * Delete account
 * URL: /accounts/:id
 * Method: DELETE
 */
router.delete('/:id', accountsController.deleteAccount);



module.exports = router;
