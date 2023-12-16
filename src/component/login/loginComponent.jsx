
import { Link } from "react-router-dom"
import "./loginComponent.css"
import { SignUp } from "../../pages/Signup"
export const LoginComponent = () => {
    return (

        <div className="component_login">

            <div style={{ width: "90%", height: "90%" }}>
                <div style={{ display: "flex", justifyContent: "center" }}><h1 style={{ color: "white" }}>LogIn</h1></div>
                <div style={{ color: "white" }}>email/mobile</div>
                <input className="login_input" type="text" placeholder="john@gmail.com"></input>
                <div style={{ color: "white" }}>password</div>
                <input className="login_input" type="text" placeholder="john@gmail.com"></input>

                <div className="Button_Login"> <div>Login</div></div>

                <Link to="/signup">
                    <div style={{ color: "white", display: "flex", justifyContent: "center" }}>

                        Not a member ? signUp</div>

                </Link>



            </div>


        </div>

    )
}