
import { Link } from "react-router-dom"
import "./signup.css"
export const SignupComponent = () => {

    return (
        <div className="component_signup">

            <div style={{ width: "100%", height: "100%" }}>
                <div style={{ display: "flex", justifyContent: "center" }}><h1 style={{ color: "white" }}>SignUP</h1></div>
                <div style={{ color: "white" }}> Full Name</div>
                <input className="login_input" type="text" placeholder="john@gmail.com"></input>
                <div style={{ color: "white" }}>Fathe Name</div>
                <input className="login_input" type="text" placeholder="john@gmail.com"></input>
                <div style={{ color: "white" }}> Email</div>
                <input className="login_input" type="text" placeholder="john@gmail.com"></input>
                <div style={{ color: "white" }}> Phone Number</div>
                <div className="phone_info" style={{ display: "flex", gap: "3px", justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <div style={{ flex: 1, }}> <input className="signup_input_phone" type="text" placeholder="+91"></input></div>
                    <div style={{ flex: 9, }}> <input className="signup_input_phone2" type="text" placeholder="123456"></input>  </div>
                </div>
                <div style={{ color: "white" }}> Password </div>
                <input className="login_input" type="text" placeholder="john@gmail.com"></input>
                <div className="Button_Login"> <div>Sign Up</div></div>
                <Link to="/login">
                    <div style={{ color: "white", display: "flex", justifyContent: "center" }}>  A member ? Login</div>
                </Link>

            </div>


        </div >
    )
}