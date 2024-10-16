// // 'use client'

// // import axios from "axios"
// // import Link from "next/link";
// // import { useRouter } from "next/navigation";
// // import { useState } from "react";
// // import toast from "react-hot-toast";


// // export default function ProfilePage() {
// // const router=useRouter()
// // const [data,setData]=useState('nothing')
// //   const logout=async()=>{
// // try{

// //   axios.get('/api/users/logout')

// //   toast.success("logout success fully")
// //   router.push('/login');
// // }catch(error){
// //   console.log(error.message);

// //   toast.error(error.message);
  
// // }
// //   }

// //   const getUserDetails=async()=>{
// //    const res= axios.get('/api/users/me')
// //    console.log(res.data);
// //    setData(res.data._id);
// //   }

// //   return (
// //     <div className='flex flex-col items-center justify-center min-h-screen py-2 gap-4'>
// //       <h1>Profile</h1>
// //       <hr />
// //       <p>profile page</p>
// //       <h2 className="bg-green-500 text-white p-2">{data=='nothing'?"Nothing":<Link 
// //       href={`/profile/${data}`}></Link>}</h2> 
// //       <hr />
// //       <button onClick={logout} className='bg-blue-500 text-white p-2'>Logut</button>
// //       <button onClick={getUserDetails} className='bg-green-500 text-white p-2'>Logut Auth</button>

// //     </div>
// //   )
// // }




'use client';

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState(null);

    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            toast.success("Logout successful");
            router.push('/login');
        } catch (error) {
            console.error(error.message);
            toast.error(error.message);
        }
    };

    const getUserDetails = async () => {
        try {
            const res = await axios.get('/api/users/me');
            console.log(res.data);
            setData(res.data.data._id);
        } catch (error) {
            console.error(error.message);
            toast.error("Failed to fetch user details");
        }
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 gap-4'>
            <h1>Profile</h1>
            <hr />
            <p>Profile page</p>
            <h2 className="bg-green-500 text-white p-2">
                {data === null ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}
            </h2>
            <hr />
            <button onClick={logout} className='bg-blue-500 text-white p-2'>Logout</button>
            <button onClick={getUserDetails} className='bg-green-500 text-white p-2'>Fetch User Details</button>
        </div>
    );
}




// 'use client';

// import axios from "axios";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import toast from "react-hot-toast";

// export default function ProfilePage() {
//     const router = useRouter();
//     const [userData, setUserData] = useState(null);

//     const logout = async () => {
//         try {
//             await axios.get('/api/users/logout');
//             toast.success("Logout successful");
//             router.push('/login');
//         } catch (error) {
//             console.error(error.message);
//             toast.error(error.message);
//         }
//     };

//     const getUserDetails = async () => {
//         try {
//             const res = await axios.get('/api/users/me');
//             console.log(res.data);
//             if (res.data.message === "User found") {
//                 setUserData(res.data.data); // Set the user data
//             }
//         } catch (error) {
//             console.error(error.message);
//             toast.error("Failed to fetch user details");
//         }
//     };

//     return (
//         <div className='flex flex-col items-center justify-center min-h-screen py-2 gap-4'>
//             <h1>Profile</h1>
//             <hr />
//             <p>Profile page</p>
//             {userData ? (
//                 <div className="bg-green-500 text-white p-2">
//                     <h2>User ID: {userData._id}</h2>
//                     <h3>Username: {userData.username}</h3>
//                     <h3>Email: {userData.email}</h3>
//                     <h3>Verified: {userData.isVerified ? 'Yes' : 'No'}</h3>
//                     <h3>Admin: {userData.isAdmin ? 'Yes' : 'No'}</h3>
//                 </div>
//             ) : (
//                 <h2 className="bg-green-500 text-white p-2">Nothing</h2>
//             )}
//             <hr />
//             <button onClick={logout} className='bg-blue-500 text-white p-2'>Logout</button>
//             <button onClick={getUserDetails} className='bg-green-500 text-white p-2'>Fetch User Details</button>
//         </div>
//     );
// }
