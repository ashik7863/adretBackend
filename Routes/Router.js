const express=require('express');
const {AddContact,GetAllContact}=require('../Controller/ContactController');

const router = express.Router();

// Students Routes
router.post('/api/add-message',AddContact);
router.get('/api/get-message',GetAllContact);


module.exports=router;