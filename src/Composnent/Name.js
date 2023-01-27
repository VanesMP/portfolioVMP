import React from "react";
import "../Styles/name.css";

function Name ({ nameprop, jobprop, idTextclass }) {

    return (
        <div className="containerName" >
            <h1 className= {nameprop} >Vanessa Macedo Pinto</h1>
            <h2 className={jobprop} id={idTextclass}>Développeuse Frontend Junior</h2>
        </div>
    )
};

export default Name;