import React, { useState, useEffect } from "react";
import "../Styles/name.css";


function Name () {

    const [textClass, setTextClass] = useState('default');

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
      const handleScroll = () => {
        if (window.scrollY > 860) {
          setTextClass('scrolled');
        } else {
          setTextClass('default');
        }
      };
      

    return (
        <div className="containerName">
            <h1 className="name">Vanessa Macedo Pinto</h1>
            <h2 className="job" id={textClass} >Développeuse Frontend Junior</h2>
        </div>
    )
};

export default Name;