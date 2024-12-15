import {redirect} from "react-router-dom"

async function Create({request}) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log("user created");
    return redirect("/");
}

export default Create;
