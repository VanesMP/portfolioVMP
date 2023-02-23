import React, {useEffect, useState} from "react";
import arrowDown from "../assets/arrowDown.svg";
import arrowUp from "../assets/ArrowUp.svg";
import Background from "../Composnent/Background";
import Footer from "../Composnent/Footer";
import Identity from "../Composnent/Identity";
import Gallery from "../Composnent/Gallery";
import "../Styles/homePage.css";
import Header from "../Composnent/Header";

function Home() {

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
      

    return(
        <div>
            <Background darkorclear="darkbackground"/>
            <div className="boxIdentity">
                <Identity />
                    <a href="#projects"><img src={arrowDown} alt="arrow to check directly all the projects"  className="arrow" /></a>
                        <div className="containerPresentation">
                            <div className="upPageProjects" id="projects"></div>
                                <Gallery />
                                <a href="#ancreMenu"><img src={arrowUp} alt="arrow to get back" className="arrowUp" /></a>
                        </div>
            </div>
            <Header 
                fixPosition="positionHeaderHome"
                idTextclass={textClass} 
                seeProject="#projects"
                classNavig="nav"
            />
            <Footer 
                fixPosition="positionFooterHome" 
            />
        </div>
    )
};

export default Home;