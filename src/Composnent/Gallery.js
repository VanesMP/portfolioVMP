import React from "react";
import "../Styles/gallery.css";
import { Link } from "react-router-dom";
import { dataList } from "../data";

function Gallery() {
        
    let small = {
    width: '300px',
    height: '300px',
    };

    let large = {
    width: '300px',
    height: '450px',
    }

    const handleLinkClick = (e) => {
      window.scrollTo(0, 0);
    }

  return (
<div>
    <div className="box">
        <div className="boxProjects">
        {dataList.map((data) => (
          <li className="listProjectGallery" key={data.id} >
              <Link to={`/projectPage/${data.id}`} key={data.id} className="cellLink"  onClick={handleLinkClick}>
              <img
              className="linkImg"
                src={data.source}
                alt={data.name}
                loading="lazy"
                style={data.size === 'small' ? small : large}
                
              />
              </Link>
              <h4 className="titleLink">{data.name}</h4>
          </li>
        ))}
        </div>
      </div>
    </div>
    )
};

export default Gallery;