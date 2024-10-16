// // // // import { Verify, verify } from 'crypto';
// // // import mongoose from 'mongoose';


// // // const UserSchema=new mongoose.Schema({
// // //     usename:{
// // //     type:String,
// // //     requied:[true,'Please Provide a username'],
// // //     unique:true,
// // //     },
// // //     email:{
       
// // //             type:String,
// // //             requied:[true,'Please Provide a email'],
// // //             unique:true, 
   
// // // },
// // // password:{
// // //     type:String,
// // //     required:[true,"Please provide a password"],
// // // },
// // // isVerfied:{
// // //     type:Boolean,
// // //     default:false,
// // // },
// // // isAdmin:{
// // //     type:Boolean,
// // //     default:false,
// // // },
// // // forgotPasswordToken:String,
// // // forgotPasswordTokenExpiry:Date,
// // // verifyToken:String,
// // // verifyTokenExpiry:Date,
// // // })

// // // const UserVal=mongoose.models.users||mongoose.model('user',UserSchema);

// // // export default UserVal;




// // import mongoose from 'mongoose';

// // const UserSchema = new mongoose.Schema({
// //     username: {
// //         type: String,
// //         required: [true, 'Please Provide a username'],
// //         unique: true,
// //     },
// //     email: {
// //         type: String,
// //         required: [true, 'Please Provide an email'],
// //         unique: true,
// //     },
// //     password: {
// //         type: String,
// //         required: [true, "Please provide a password"],
// //     },
// //     isVerified: {
// //         type: Boolean,
// //         default: false,
// //     },
// //     isAdmin: {
// //         type: Boolean,
// //         default: false,
// //     },
// //     forgotPasswordToken: String,
// //     forgotPasswordTokenExpiry: Date,
// //     verifyToken: String,
// //     verifyTokenExpiry: Date,
// // });

// // // Check if the model already exists, or create it
// // const UserVal = mongoose.models.user || mongoose.model('user', UserSchema);

// // export default UserVal;


// import mongoose from 'mongoose';

// // Define the user schema
// const UserSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: [true, 'Please provide a username'],
//         unique: true,
//     },
//     email: {
//         type: String,
//         required: [true, 'Please provide an email'],
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: [true, 'Please provide a password'],
//     },
//     isVerified: {
//         type: Boolean,
//         default: false,
//     },
//     isAdmin: {
//         type: Boolean,
//         default: false,
//     },
//     forgotPasswordToken: String,
//     forgotPasswordTokenExpiry: Date,
//     verifyToken: String,
//     verifyTokenExpiry: Date,
// });

// // Check if the model already exists, or create it
// const UserVal = mongoose.models.User || mongoose.model('User', UserSchema);

// export default UserVal;




import mongoose from 'mongoose';

// Define the user schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide a username'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

// Check if the model already exists, or create it
const UserVal = mongoose.models.User || mongoose.model('User', UserSchema);

export default UserVal;
