import nodemailer from 'nodemailer';
import UserVal from '@/models/UserModel';
import bcryptjs from 'bcryptjs'

export const sendEmail=async ({email,emailType,userId}:any)=>{
    try{
        //create a hased token
      const hashedToken=await  bcryptjs.hash(userId.toString(),10)

     if(emailType==="VERIFY"){
        await UserVal.findByIdAndUpdate(userId,
            {verifyToken:hashedToken,verifyTokenExpiry:Date.now()+3600000})
     }else if(emailType==="RESET"){
        await UserVal.findByIdAndUpdate(userId,
            {forgotPasswordToken:hashedToken,
            forgotPasswordTokenExpiry:Date.now()+3600000})
     }

 // Looking to send emails in production? Check out our Email API/SMTP product!
var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5c591a5cbbe2a2",
      pass: "7a680de8a46e73"
    }
  });

     const mailOption={
        from:'ranjithdevwemo2@gmail.com',
        to:email,
        subject:emailType==="VERIFY"?"Verify your email":
        "Reset your password", 
        html:`<p>Click <a href="http://localhost:3001/verifyemail?token=${hashedToken}">here</a>to${emailType=="VERIFY"
            ? "verify your email" : "reset your password"
        } or copy and paste the link below in your browser.<br>
        http://localhost:3001/verifyemail?token=${hashedToken}
        </p>`
     }
const mailresponse=await transport.sendMail(mailOption);

return mailresponse;

    }catch(error){
        throw new Error(error.message);
    }
}