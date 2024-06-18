const User = require("../models/users.model");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signUp = async (request, response) => {
    try {
        const existingUser = await User.findOne({
            where: {
                email: request.body.email
            }
        })
        if (existingUser) {
            return response.status(409).json({message: 'This user already exists.'})
        }
        const salt = bcrypt.genSaltSync(parseInt('10'));
        request.body.password = bcrypt.hashSync(request.body.password, salt);
        const user = await User.create({
            email: request.body.email,
            password: request.body.password,
            name: request.body.name
        });
        const payload = {email: request.body.email};
        const token = jwt.sign(payload, 'didiBorjaMarta', {expiresIn: '1h'});
        return response.status(200).json({token});
    } catch (error) {
        console.log(`An error has occurred.`);
        return response.status(500).json(error);
    }
}

module.exports = {signUp};