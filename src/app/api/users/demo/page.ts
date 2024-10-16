// import {connect} from '@/dbConfig/dbConfig';
// // import User from '@/models/UserModel';

// import { NextRequest,NextResponse } from 'next/server';
// // const bcryptjs=require('bcryptjs');
// // const User=require('@/models/UserModel')
// import bcryptjs from "bcryptjs";
// import User from "@/models/UserModel"


// connect()

// export async function POST(request:NextRequest){
//     try{
//         const reqBody=await request.json()
//         const {username,email,password}=reqBody;

//         console.log(reqBody);
//      //check if user already excist
//     const user= User.findOne({email}); 
//     if({user}){
//         return NextResponse.json({error:"User already Exists"},{status:400})
//     }  
//     //hash the password
//     const salt=await bcryptjs.genSalt(10)
//     const hashedPassword=await bcryptjs.hash(password,salt);

//     const newUser=new User({
//         username,
//         email,
//         password:hashedPassword
//     })

//     const saveUser=await newUser.save()
//     console.log(saveUser);

//     return NextResponse.json({
//         message:'User created Successfully',
//         success:true,
//         saveUser
//      } )
    

//     }catch(error){
//         return NextResponse.json({error},
//             {status:500})
//     }
// }





// import { connect } from '@/dbConfig/dbConfig';
Connect
import UserVal from '@/models/UserModel';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { Connect } from '@/dbConfig/dbConfig';

Connect()

// Define the POST handler for user signup
export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const reqBody: { username: string; email: string; password: string } = await request.json();
        const { username, email, password } = reqBody;

        console.log(reqBody);
        
        // Check if user already exists
        const existingUser = await UserVal.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new UserVal({
            username,
            email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({
            message: 'User created successfully',
            success: true,
            savedUser,
        });

    } catch (error) {
        console.error("Signup error: ", error);
        return NextResponse.json({ error: error instanceof Error ? error.message : "Internal server error" }, { status: 500 });
    }
}




