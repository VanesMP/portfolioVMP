import React from "react";
import "../Styles/footer.css";

function Footer({ fixPosition }) {
    return (
        <div className="banner" id={fixPosition}>
            <div className="textFooter">
                <p className="designed">Designed by Vanessa MP.</p>
                <p className="rights">all rights reserved, 2023</p>
            </div>
        </div>
    )
};

export default Footer;