import { User } from '../models/user.model.js';

const registerUser = async (req, res) => {
    try {
        const { username, email, password} = req.body;

        // basic validation
        if(!username || !email || !password){
            return req.status(400).json({ message: "All fields are required"});
        }

        // ckeck if user already exists
        const existing = await User.findOne({ email: email.toLowerCase()});
        if(exisiting){
            return res.status(400).json({
                message: "User already exists!!"
            })
        }

        // create user

        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password,
            loggedIn: false,
        });

        res.status(201).json({
            message: "User registered Sucessfully",
            user: { id: user._id, email: user.email, username: user.username}
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message
        });
    }
};

export {
    registerUser
}