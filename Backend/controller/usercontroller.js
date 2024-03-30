import { usermodel } from "../models/usermodel.js";
import bcrypt from 'bcrypt';

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

