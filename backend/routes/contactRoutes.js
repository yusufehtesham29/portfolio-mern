const express = require('express');
const router = express.Router();
const {
  submitContact,
  getAllContacts,
  markAsRead,
  deleteContact
} = require('../controllers/contactController');

// Public route - anyone can submit contact form
router.post('/', submitContact);

// Admin routes - for viewing/managing contact messages
// (We'll add authentication middleware later)
router.get('/', getAllContacts);
router.put('/:id/read', markAsRead);
router.delete('/:id', deleteContact);

module.exports = router;