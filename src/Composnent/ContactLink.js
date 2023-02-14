import React from "react";

function ContactLink({ styleIconentext, icone, altText, targetLink, styleIconeContact, styleInstruction, subtextLink }) {

    return(
        <div className={styleIconentext} >
            <a href={targetLink} target="_blank" rel="noopener noreferrer" >
                <img src={icone} alt={altText} className={styleIconeContact} />
                <p className={styleInstruction}>{subtextLink}</p>
            </a>
        </div>
    )
};

export default ContactLink;