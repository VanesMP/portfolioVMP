import React from "react";
import "../Styles/footer.css";

function Footer({ containerFooter }) {
    return (
        <div className={containerFooter}>
            <p className="designed">Designed by Vanessa MP.</p>
            <p className="rights">all rights reserved, 2023</p>
        </div>
    )
};

export default Footer;