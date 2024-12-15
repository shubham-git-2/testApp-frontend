import {Link, Outlet} from "react-router-dom"

function Home() {

  return (
    <>
        <h1> Home Page </h1>
        <Link to="signup">SignUp Page</Link>
        <Outlet/>
    </>
  )
}

export default Home
