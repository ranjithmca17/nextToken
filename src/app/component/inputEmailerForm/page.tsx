// 'use client'

// import React, { useState } from 'react'
// import {mailAction}from "@/app/action/mailAction"
// export default function InputEmailForm() {
//     const [sendEmail,setSendEmail]=useState('');

//     const handleSubmit=async(e)=>{
// e.preventDefault();
// console.log(sendEmail);
// await mailAction({email:sendEmail});

//     }

//   return (
//     <div className='flex h-screen flex-col w-screen items-center justify-center'>
//       <h1>InputEmailForm</h1>
//       <form action="" className='flex flex-col items-center justify-center'>
//         <fieldset>
//             <div className=" flex items-center justify-center gap-2 flex-col">
//             <label htmlFor="">Email ID : </label>
//             <input onChange={(e)=>setSendEmail(e.target.value)} className='text-black' type="email" required />
//             <button onClick={handleSubmit} className='bg-white p-2 text-black cursor-pointer'>submit</button>

//             </div>
//         </fieldset>
//       </form>
//     </div>
//   )
// }





'use client'

import React, { useState } from 'react';
import { mailAction } from "@/app/action/mailAction";

export default function InputEmailForm() {
  const [sendEmail, setSendEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Email to send:", sendEmail);

    // Validate email before sending
    if (sendEmail) {
      try {
        await mailAction({ email: sendEmail });
        alert("Password reset email sent successfully.");
      } catch (error) {
        console.error("Error sending email:", error);
        alert("There was an error sending the reset email.");
      }
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <div className='flex h-screen flex-col w-screen items-center justify-center'>
      <h1>Input Email for Password Reset</h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
        <fieldset>
          <div className="flex items-center justify-center gap-2 flex-col">
            <label htmlFor="email">Email ID:</label>
            <input
              id="email"
              type="email"
              required
              className='text-black'
              onChange={(e) => setSendEmail(e.target.value)}
              value={sendEmail}
            />
            <button type="submit" className='bg-white p-2 text-black cursor-pointer'>
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}



