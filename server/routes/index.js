const { Router } = require('express');
const { contactForm } = require('../controllers/contact');
const { consultingForm } = require('../controllers/consulting');

const router = Router();

router.post('/contact', contactForm.submitForm);
router.post('/consulting', consultingForm.submitForm);

module.exports = {
  consultingForm: consultingForm.submitForm,
  contactForm: contactForm.submitForm
};