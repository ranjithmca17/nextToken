


// import { Connect } from "@/dbConfig/dbConfig";
// import UserVal from "@/models/UserModel";
// import { NextRequest, NextResponse } from "next/server";
// import bcrypt from 'bcryptjs';

// // Establish database connection
// Connect();

// export async function POST(request: NextRequest) {
//     try {
//         // Parse the incoming JSON request body
//         const reqBody = await request.json();
//         const { username, email, password } = reqBody;

//         // Check if all required fields are provided
//         if (!username || !email || !password) {
//             return NextResponse.json({ error: "All fields are required" }, { status: 400 });
//         }

//         // Check if user already exists
//         const existingUser = await UserVal.findOne({ email });

//         if (existingUser) {
//             return NextResponse.json({ error: "User already exists" }, { status: 400 });
//         }

//         // Hash the password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Create a new user
//         const newUser = new UserVal({
//             username,
//             password: hashedPassword,
//             email,
//         });

//         // Save the new user to the database
//         const savedUser = await newUser.save();

//         return NextResponse.json({
//             message: 'User created successfully',
//             success: true,
//             user: {
//                 id: savedUser._id,
//                 username: savedUser.username,
//                 email: savedUser.email,
//             },
//         });

//     } catch (error) {
//         console.error("Error during signup:", error);
//         return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//     }
// }







import { Connect } from "@/dbConfig/dbConfig";
import UserVal from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import { sendEmail } from "@/helpers/mailer";

// Establish database connection
Connect();

export async function POST(request: NextRequest) {
    try {
        // Parse the incoming JSON request body
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        // Check if all required fields are provided
        if (!username || !email || !password) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

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
            password: hashedPassword,
            email,
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        //send verification email 
        await sendEmail({email,emailType:"VERIFY",userId:savedUser._id});

        return NextResponse.json({
            message: 'User created successfully',
            success: true,
            user: {
                id: savedUser._id,
                username: savedUser.username,
                email: savedUser.email,
            },
        });

    } catch (error) {
        console.error("Error during signup:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
