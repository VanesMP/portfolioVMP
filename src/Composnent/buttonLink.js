import React from "react";
import "../Styles/buttonLink.css";

function ButtonLink({ textButtonLink, pathLink }) {

    return(
        <div>
            <div className="boxButton">
                <a href={pathLink} target="_blank" rel="noopener noreferrer">
                    <p className="textButton">{textButtonLink}</p>
                </a>
            </div>
        </div>
    )
};

export default ButtonLink;