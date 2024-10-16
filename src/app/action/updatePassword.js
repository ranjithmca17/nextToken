// // "use server"
// // export async function updatePassword({password}) {
// //     console.log(password);
    
// // }


// "use server";

// export async function updatePassword(password) {
//     console.log("Updating password:", password);
//     // console.log("token value is : ",token);
    

//     try {
      

//         return { success: true };
//     } catch (error) {
//         console.error("Error updating password:", error);
//         return { error: error.message };
//     }
// }



"use server";

export async function updatePassword({password,token}) {
    console.log("Updating password:", password);
    console.log("token value is : ",token);
    
    try {
        // Logic to update the password goes here
        
        return { success: true };
    } catch (error) {
        console.error("Error updating password:", error);
        return { error: error.message };
    }
}
