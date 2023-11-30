const {ContactModel} = require("../Models/Contact/ContactModel");
const {sendEmail}=require("../Services/email-confirmation")

const AddContact = async (req, res) => {
  try {
      const contactData = new ContactModel(req.body);
      const resp = await contactData.save();
      sendEmail(req.body);
      return res.json({
        status: 200,
        msg: "Thank for your query ! we will get back to you very soon",
        resp,
    });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const GetAllContact = async (req, res) => {
  try {
      const contactData = await ContactModel.find();
     
      return res.json({
        status: 200,
        msg: "All messages fetched successfully",
        contactData,
    });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports={AddContact,GetAllContact};