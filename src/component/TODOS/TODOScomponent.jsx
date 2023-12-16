import { Color } from "three"
import "./TODOS.css"


export const TODOS_Comp = () => {
    return (

        <div className="TODOS_upperblock">
            <div><h1 style={{ color: "white" }}> ToDO </h1></div>
            <div>

                <input type="text" placeholder="Search the task"></input>

            </div>
            <div style={{ display: "flex", gap: "3px" }}>
                <textarea></textarea>
                <div style={{
                    width: "24px", height: "24px", backgroundColor: " #8171E6", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%"
                }}><i class="fa fa-close" style={{ color: "white" }}></i></div>
            </div>
            <div style={{ display: "flex", gap: "3px" }}>
                <textarea></textarea>
                <div style={{
                    width: "24px", height: "24px", backgroundColor: "#8171E6", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%"
                }}><i class="fa fa-close" style={{ color: "white" }}></i></div>
            </div>
            <div style={{ display: "flex", gap: "3px" }}>
                <textarea></textarea>
                <div style={{
                    width: "24px", height: "24px", backgroundColor: "#8171E6", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%"
                }}><i class="fa fa-close" style={{ color: "white" }}></i></div>
                <div style={{
                    width: "24px", height: "24px", backgroundColor: "#8171E6", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%"
                }} > <i class="fa-solid "></i></div>
            </div>

        </div>


    )

}


