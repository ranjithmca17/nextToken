// // import React from 'react'

// // export default function RestPasswordPage() {
// //   return (
// //     <div>
// //       RestPasswordPage
// //     </div>
// //   )
// // }



// // src/pages/auth/reset-password/[token].tsx
// 'use client';
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { updatePassword } from "../../action/updatePassword";


// export default function ResetPassword() {
//     const router = useRouter();
//     const [user, setUser] = useState({ password: '', confirmPassword: '' });
//     // const [loading, setLoading] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);
//     // const [token, setToken] = useState<string | null>(null);

//     // useEffect(() => {
//     //     const { token } = router.query;
//     //     if (token) {
//     //         setToken(token as string);
//     //     }
//     // }, [router.query]);

//     const onSubmit=async(e)=>{
// e.preventDefault();
// await updatePassword(user.password);
// console.log(user);

//     }

//     const onChangeVal = (e) => {
//         const { name, value } = e.target;
//         setUser((prev) => ({ ...prev, [name]: value }));
//     };

//     const confirmPassword = async (e) => {
//         e.preventDefault();
//         const { password, confirmPassword } = user;

//         if (password !== confirmPassword) {
//             alert("Passwords do not match.");
//             return toast.error("Passwords do not match.");
//         }
// if(password.length==0||confirmPassword.length==0){
//     alert("please enter value :");
// }
//         // setLoading(true);
     
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen py-2">
//             <form onSubmit={confirmPassword} className="flex flex-col">
//                 <label htmlFor="password">Enter Your New Password:</label>
//                 <input 
//                     type={showPassword ? 'text' : 'password'}
//                     name="password"
//                     value={user.password}
//                     onChange={onChangeVal}
//                     required
//                     className="text-black"
//                 />

//                 <label htmlFor="confirmPassword">Confirm Your Password:</label>
//                 <input
//                     type={showPassword ? 'text' : 'password'}
//                     name="confirmPassword"
//                     value={user.confirmPassword}
//                     onChange={onChangeVal}
//                     required
//                     className="text-black"
//                 />
//                 <p onClick={() => setShowPassword(!showPassword)}>{!showPassword ?"Show password":"hide password"}</p>
//                 {/* <button className="bg-black text-white p-2 rounded-md cursor-pointer" disabled={loading}>
//                     {loading ? "Updating..." : "Confirm"}
//                 </button> */}
//                 <button onClick={onSubmit} className="bg-white text-black p-2 rounded-md cursor-pointer">
//                     submit
//                 </button>
//             </form>
//         </div>
//     );
// }





// src/pages/auth/reset-password/[token].tsx
'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
// import toast from "react-hot-toast";
import { updatePassword } from "../../action/updatePassword";

export default function ResetPassword({params}) {
    const router = useRouter();
    const [user, setUser] = useState({ password: '', confirmPassword: '' });
    const [showPassword, setShowPassword] = useState(false);
console.log("param value is : ",params);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { password, confirmPassword } = user;

        if (password !== confirmPassword) {
            console.log(user);
            
            alert("Passwords do not match.");
            return;
        }

        if (password.length === 0 || confirmPassword.length === 0) {
            alert("Please enter a value.");
            return;
        }

        const result = await updatePassword({password:password,token:params.token});
        console.log(result);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="password">Enter Your New Password: </label>
                <input 
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                    className="text-black"
                />

                <label htmlFor="confirmPassword">Confirm Your Password:</label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleChange}
                    required
                    className="text-black"
                />
                <p onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "Hide password" : "Show password"}
                </p>
                <button type="submit" className="bg-white text-black p-2 rounded-md cursor-pointer">
                    Submit
                </button>
            </form>
        </div>
    );
}
