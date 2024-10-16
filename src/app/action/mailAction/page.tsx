
// 'use server';

// import nodemailer from 'nodemailer';
// import { Connect } from "@/dbConfig/dbConfig";
// import UserVal from "@/models/UserModel";
// import { nanoid } from "nanoid";

// export async function mailAction( ) {
//     const email="ranjithmca007@gmail.com";
//     console.log("Requested email:", email);

//     // Connect to the database
//     await Connect();

//     // Find user by email in the database
//     const user = await UserVal.findOne({ email });
//     console.log("User found:", user);

//     if (user) {
//         // Generate a unique token for the password reset
//         const token = nanoid(32);

//         // Set up the transporter for sending the email
//         const transporter = nodemailer.createTransport({
//             host: "sandbox.smtp.mailtrap.io",
//             port: 2525,
//             auth: {
//                 user: "ranjthmca007@gmail.com",
//                 pass: "ranjith$321",
//             },
//         });

//         // Default message for a specific email
//         const defaultEmail = "ranjithmca007@gmail.com";
//         let subject = "Password Reset Request";
//         let htmlBody;

//         if (email === defaultEmail) {
//             subject = "Special Password Reset Request";
//             htmlBody = `
//                 <p>Hi Ranjith,</p>
//                 <p>Click here to <a href="http://localhost:3001/reset-password/${token}">reset your password</a>.</p>
//                 <p>Thank you!</p>
//             `;
//         } else {
//             htmlBody = `
//                 <p>Click here to <a href="http://localhost:3001/reset-password/${token}">reset your password</a>.</p>
//             `;
//         }

//         // Sending the email
//         const info = await transporter.sendMail({
//             from: '"Maddison Foo Koch 👻" <ranjithmca007@gmail.com>',
//             to: email,  // Send to the requested email
//             subject: subject,
//             text: `Click here to reset your password: http://localhost:3001/reset-password/${token}`,
//             html: htmlBody,
//         });

//         console.log("Message sent: %s", info.messageId);
//     } else {
//         console.log("User with the provided email does not exist.");
//     }
// }

import React from 'react'

 function page() {
  return (
    <div>
      
    </div>
  )
}
