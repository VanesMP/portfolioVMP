import React from "react";
import "../Styles/buttonLink.css";

function ButtonLink({ textButtonLink }) {

    return(
        <div>
            <div className="boxButton">
                <p className="textButton">{textButtonLink}</p>
            </div>
        </div>
    )
};

export default ButtonLink;