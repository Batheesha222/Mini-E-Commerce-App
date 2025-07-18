const { User } = require("../models")



const signup = async (req, res, next) => {
    try {
        const { name, email, password, phoneNo } = req.body;
        //isEmail check
        //hash password

        const newUser = new User({ name, email, password, phoneNo })
        await newUser.save()
        res.status(201).json({
            code: "OK",
            status: true,
            message: "User registered successfully",
        });

    } catch (error) {
        res.status(400).json({
            code: "failed",
            status: true,
            message: "User registered successfully",
        });
        console.log(error.message)
    }
}


const signin = async () => {
    try {

    } catch (error) {

    }
}

module.exports = {signup}