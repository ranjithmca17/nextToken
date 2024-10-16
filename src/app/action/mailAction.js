


'use server';

import nodemailer from 'nodemailer';
import { Connect } from "@/dbConfig/dbConfig";
import UserVal from "@/models/UserModel";
import { nanoid } from "nanoid";
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables

export default async function mailAction({ email }) {
    console.log("Requested email:", email);
    
    // Connect to the database
    await Connect();

    // Find user by email in the database
    const user = await UserVal.findOne({ email });
    console.log("User found:", user);

    if (user) {
        // Generate a unique token for the password reset
        const token = nanoid(32);

        // Set up the transporter for sending the email
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // HTML content for the reset email
        const htmlBody = `
            <p>Click here to <a href="http://localhost:3001/reset-password/${token}">reset your password</a>.</p>
        `;

        // Sending the email
        await transporter.sendMail({
            from: '"Ranjith MCA" <ranjithmca007@gmail.com>',  // Your name and email
            to: email,  // Send to the requested email
            subject: "Password Reset Request",
            text: `Click here to reset your password: http://localhost:3001/reset-password/${token}`,
            html: htmlBody,
        });

        console.log("Email sent successfully.");
    } else {
        console.log("User with the provided email does not exist.");
    }
}




// // // 'use server';

// // // import nodemailer from 'nodemailer';
// // // import { Connect } from "@/dbConfig/dbConfig";
// // // import UserVal from "@/models/UserModel";
// // // import { nanoid } from "nanoid";
// // // import dotenv from 'dotenv';

// // // dotenv.config();  // Load environment variables

// // // export async function mailAction({ email }) {
// // //     console.log("Requested email:", email);
    
// // //     // Connect to the database
// // //     await Connect();

// // //     // Find user by email in the database
// // //     const user = await UserVal.findOne({ email });
// // //     console.log("User found:", user);

// // //     if (user) {
// // //         // Generate a unique token for the password reset
// // //         const token = nanoid(32);

// // //         // Set up the transporter for sending the email
// // //         const transporter = nodemailer.createTransport({
// // //             host: process.env.SMTP_HOST,
// // //             port: process.env.SMTP_PORT,
// // //             auth: {
// // //                 user: process.env.SMTP_USER,
// // //                 pass: process.env.SMTP_PASS,
// // //             },
// // //         });

// // //         // HTML content for the reset email
// // //         const htmlBody = `
// // //             <p>Click here to <a href="http://localhost:3001/reset-password/${token}">reset your password</a>.</p>
// // //         `;

// // //         // Sending the email
// // //         await transporter.sendMail({
// // //             from: '"Ranjith MCA" <ranjithmca007@gmail.com>',  // Your name and email
// // //             to: email,  // Send to the requested email
// // //             subject: "Password Reset Request",
// // //             text: `Click here to reset your password: http://localhost:3001/reset-password/${token}`,
// // //             html: htmlBody,
// // //         });

// // //         console.log("Email sent successfully.");
// // //     } else {
// // //         console.log("User with the provided email does not exist.");
// // //     }
// // // }



// // 'use server';

// // import nodemailer from 'nodemailer';
// // import { Connect } from "@/dbConfig/dbConfig";
// // import UserVal from "@/models/UserModel";
// // import { nanoid } from "nanoid";
// // import dotenv from 'dotenv';

// // dotenv.config();  // Load environment variables

// // export async function mailAction({ email }) {
// //     console.log("Requested email:", email);
    
// //     // Connect to the database
// //     await Connect();

// //     // Find user by email in the database
// //     const user = await UserVal.findOne({ email });
// //     console.log("User found:", user);

// //     if (user) {
// //         // Generate a unique token for the password reset
// //         const token = nanoid(32);

// //         // Set up the transporter for sending the email
// //         const transporter = nodemailer.createTransport({
// //             host: process.env.SMTP_HOST,
// //             port: Number(process.env.SMTP_PORT),  // Ensure it's a number
// //             secure: process.env.SMTP_PORT === '465',  // Use true for 465, false for other ports
// //             auth: {
// //                 user: process.env.SMTP_USER,
// //                 pass: process.env.SMTP_PASS,
// //             },
// //         });

// //         // HTML content for the reset email
// //         const htmlBody = `
// //             <p>Click here to <a href="http://localhost:3001/reset-password/${token}">reset your password</a>.</p>
// //         `;

// //         // Sending the email
// //         await transporter.sendMail({
// //             from: '<ranjithmca007@gmail.com>',
// //             to: email,
// //             subject: "Password Reset Request",
// //             text: `Click here to reset your password: http://localhost:3001/reset-password/${token}`,
// //             html: htmlBody,
// //         });

// //         console.log("Email sent successfully.");
// //     } else {
// //         console.log("User with the provided email does not exist.");
// //     }
// // }







// 'use server';

// import nodemailer from 'nodemailer';
// import { Connect } from "@/dbConfig/dbConfig";
// import UserVal from "@/models/UserModel";
// import { nanoid } from "nanoid";
// import dotenv from 'dotenv';

// dotenv.config();  // Load environment variables

// export async function mailAction({ email }) {
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
//             host: process.env.SMTP_HOST,
//             port: Number(process.env.SMTP_PORT),  // Ensure it's a number
//             secure: process.env.SMTP_PORT === '465',  // Use true for 465, false for other ports
//             auth: {
//                 user: process.env.SMTP_USER,
//                 pass: process.env.SMTP_PASS,
//             },
//         });

//         // HTML content for the reset email
//         const htmlBody = `
//             <p>Click here to <a href="http://localhost:3001/reset-password/${token}">reset your password</a>.</p>
//         `;

//         // Sending the email
//         await transporter.sendMail({
//             from: '<ranjithmca007@gmail.com>',
//             to: email,
//             subject: "Password Reset Request",
//             text: `Click here to reset your password: http://localhost:3001/reset-password/${token}`,
//             html: htmlBody,
//         });

//         console.log("Email sent successfully.");
//     } else {
//         console.log("User with the provided email does not exist.");
//     }
// }




// 'use server';

// import nodemailer from 'nodemailer';
// import { Connect } from "@/dbConfig/dbConfig";
// import UserVal from "@/models/UserModel";
// import { nanoid } from "nanoid";
// import dotenv from 'dotenv';
// import { MailtrapTransport } from 'mailtrap';

// dotenv.config();  // Load environment variables

// export async function mailAction({ email }) {
//     console.log("Requested email:", email);
    
//     // Connect to the database
//     await Connect();

//     // Find user by email in the database
//     const user = await UserVal.findOne({ email });
//     console.log("User found:", user);

//     // Set the default email address
//     const defaultEmail = 'ranjithmca007@gmail.com';

//     if (user) {
//         // Generate a unique token for the password reset
//         const token = nanoid(32);

//         // Set up the transporter for sending the email
//         let transporter;
//         if (process.env.USE_MAILTRAP === 'true') {
//             transporter = nodemailer.createTransport(
//                 MailtrapTransport({
//                     token: process.env.MAILTRAP_TOKEN,
//                     testInboxId: process.env.MAILTRAP_INBOX_ID,
//                 })
//             );
//         } else {
//             transporter = nodemailer.createTransport({
//                 host: process.env.SMTP_HOST,
//                 port: Number(process.env.SMTP_PORT),  // Ensure it's a number
//                 secure: process.env.SMTP_PORT === '465',  // Use true for 465, false for other ports
//                 auth: {
//                     user: process.env.SMTP_USER,
//                     pass: process.env.SMTP_PASS,
//                 },
//             });
//         }

//         // HTML content for the reset email
//         const htmlBody = `
//             <p>Click here to <a href="http://localhost:3001/reset-password/${token}">reset your password</a>.</p>
//         `;

//         // Sending the email to the default email address
//         await transporter.sendMail({
//             from: '<ranjithmca007@gmail.com>',
//             to: defaultEmail,  // Use the default email address
//             subject: "Password Reset Request",
//             text: `Click here to reset your password: http://localhost:3001/reset-password/${token}`,
//             html: htmlBody,
//         });

//         console.log("Email sent successfully to:", defaultEmail);
//     } else {
//         console.log("User with the provided email does not exist.");
//     }
// }
