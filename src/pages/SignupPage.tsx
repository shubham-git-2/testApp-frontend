import {Form} from "react-router-dom"

function SignupPage() {
    return (
        <Form method="post" action="/users/">
            <label for="name">Name</label>
            <input id="name" type="text" name="name"></input>
            <label>email</label>
            <input type="email" name="email"></input>
            <label>password</label>
            <input type="password" name="password"></input>
            <button type="submit">SignUP</button>
        </Form>
    )
}

export default SignupPage;
