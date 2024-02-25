const FormSchema = require('../Models/formModel');

exports.addRegistration = async (req, res, next) => {
    try {
        const existingUser = await FormSchema.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email is already registered' });
        }
        const formData = new FormSchema(req.body);
        console.log(formData);
        await formData.save();
        res.status(201).json(formData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
