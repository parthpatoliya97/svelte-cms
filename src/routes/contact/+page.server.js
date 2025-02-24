
// export const actions = {
// 	default: async ({request}) => {
// 		const formData=await request.formData()

//         const name=formData.get("name")
//         const age=formData.get("age")
//         const email=formData.get("email")


//         return{
//             message:"form is submitted"
//         }



// 	}
// };



export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const name = formData.get("name");
        const age = formData.get("age");
        const email = formData.get("email");

        console.log("name:", name);
        console.log("age:", age);
        console.log("email:", email);

        return {
            message: "Form is submitted"
        };
    }
};
