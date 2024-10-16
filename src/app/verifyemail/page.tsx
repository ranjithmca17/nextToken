// 'use client';
// import axios from "axios"
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function VerifyEmailPage() {
//     const [token,setToken]=useState(false);
//     const[verified,setVerified]=useState(false);
//     const[error,setError]=useState(false);

//     const verifyUserEmail=async ()=>{
//         try{
// await axios.post('/api/users/verifyemail',{token})
// setVerified(true);
//         }catch(error:any){
//             setError(true);
//             console.log(error);
            
//         }
//     }

//     useEffect(()=>{
//       const urlToken=window.location.search.split("=")[1];
//       setToken(urlToken ||"");
//     },[])

//     useEffect(()=>{
//         if(token.length>0){
//             verifyUserEmail();
//         }
//     },[token])

//     return(
//         <div className="flex flex-col items-center justify-center min-h-screen py-2">
//             <h1 className="text-4xl">Verify Email</h1>
//             <h2 className="p-2 bg-orange-500 text-black">{token?`${token}`:"no token"}</h2>
//             {verified&&(
//                 <div className="">
//             <h1 className="text-2xl">Email Verified </h1>
//             <Link href='/login'>
//             login</Link>
//                 </div>
//             )}

// {error&&(
//                 <div className="">
//             <h1 className="text-2xl bg-red-700">Error </h1>
           
//                 </div>
//             )}
          
//         </div>
//     )
// }


'use client';

import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function VerifyEmailPage() {
    const [token, setToken] = useState<string | null>(null);
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        if (!token) return; // Ensure token is present before making the request

        try {
            await axios.post('/api/users/verifyemail', { token });
            setVerified(true);
        } catch (err) {
            setError(true);
            console.error("Verification error:", err);
        }
    };

    useEffect(() => {
        const urlToken = new URLSearchParams(window.location.search).get('token');
        setToken(urlToken);
    }, []);

    useEffect(() => {
        if (token) {
            verifyUserEmail();
        }
    }, [token]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl">Verify Email</h1>
            <h2 className="p-2 bg-orange-500 text-black">
                {token ? `Token: ${token}` : "No token"}
            </h2>
            {verified && (
                <div>
                    <h1 className="text-2xl">Email Verified</h1>
                    <Link href="/login">
                       Login
                    </Link>
                </div>
            )}
            {error && (
                <div>
                    <h1 className="text-2xl bg-red-700 text-white p-2">Error during verification</h1>
                </div>
            )}
        </div>
    );
}
