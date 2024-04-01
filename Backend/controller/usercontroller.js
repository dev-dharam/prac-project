import { usermodel } from "../models/usermodel.js";
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';

// const JWT_SECURE = process.env.JWT_SECURE;
const JWT_SECURE = "thisismyjsonwebtokennnnsecurekey"

export const Register = async (req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(404).json({
            success: false,
            status: 404,
            messgae: "Please Fill all fields"
        });
    }

    try {
        const registerDetail = await usermodel.find({email: email});
        console.log(registerDetail);

        if(registerDetail.length > 0){
            return res.status(401).json({
                success: false,
                messgae: "This email allready register"
            })
        }

        const saltround = 10;
        const hashedpassword = await bcrypt.hash(password, saltround);

        const user = await usermodel.create({
            name: name,
            email: email,
            password: hashedpassword
        })

        res.status(200).json({
            success: true,
            messgae: "Data save successfuly",
            user
        })

    } catch (error) {
        console.log(error);
    }
}


// Login Controller
export const Login = async(req, res) => {
    const {email, password} = req.body;
    console.log(email, password);

    // Check User
    const UserData = await usermodel.findOne({email: email});
    console.log(UserData)
    if(!UserData){
        return res.status(401).json({
            success: false,
            messgae: "Please Provide Valid Credential - Email"
        })
    }

    // Password Compare
    const comparePass = await bcrypt.compare(password, UserData.password);
    console.log(comparePass)
    if(!comparePass){
        return res.status(401).json({
            success: false,
            messgae: "Please Provide Valid Credential - Password"
        })
    };

    // JWT Token

    const user = {
        id: {
            userID: UserData._id
        }
    }

    const token = JWT.sign(user, JWT_SECURE, {expiresIn: '1h'});

    res.status(200).json({
        success: true,
        messgae: "Login Successfully!",
        token
    });

}

