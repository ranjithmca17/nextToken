// import { Connect } from "@/dbConfig/dbConfig";
// import UserVal from "@/models/UserModel";
// import { NextRequest,NextResponse } from "next/server";

// Connect();

// export async function Post(request:NextRequest) {
//     try{
// const reqBody=await request.json();
// const {token}=reqBody
// console.log(token);

// const user= await UserVal.findOne({verifyToken:token,verifyTokenExpiry:{$gt:Date.now()}})
// if(!user){
//     return NextResponse.json({error:"Invalid token"},{status:400})
// }
// console.log(user);
// user.isVerified=true;
// user.verifyToken=undefined;
// user.verifyTokenExpiry=undefined;

// await user.save();

// return NextResponse.json({
//     message:"Email verified successfully",
//     success:true
// })

//     }catch(error:any){
//         return NextResponse.json({error:error.message},{status:500})
//     }
// }


import { Connect } from "@/dbConfig/dbConfig";
import UserVal from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";

// Establish database connection
Connect();

export async function POST(request: NextRequest) {
    try {
        // Parse the incoming JSON request body
        const reqBody = await request.json();
        const { token } = reqBody;

        console.log("Received token:", token);

        // Find the user with the provided token and check if it is still valid
        const user = await UserVal.findOne({
            verifyToken: token,
            verifyTokenExpiry: { $gt: Date.now() },
        });

        if (!user) {
            return NextResponse.json({ error: "Invalid or expired token." }, { status: 400 });
        }

        console.log("User found:", user);

        // Update user verification status and clear verification tokens
        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;

        await user.save();

        return NextResponse.json({
            message: "Email verified successfully.",
            success: true,
        });

    } catch (error: any) {
        console.error("Verification error:", error);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}
