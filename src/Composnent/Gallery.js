import React from "react";
import "../Styles/gallery.css";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from "react-router-dom";
import { dataList } from "../data";

function Gallery() {
        
    let small = {
    width: '100%',
    height: '300px',
    };

    let large = {
    width: '100%',
    height: '450px',
    }

    const handleLinkClick = (e) => {
      window.scrollTo(0, 0);
    }

    

  return (
    <Box className="box">
      <ImageList variant="masonry" cols={3} gap={20} className="ul">
        {dataList.map((data) => (
          <ImageListItem key={data.id} className="cellItem">
              <Link to={`/projectPage/${data.id}`} key={data.id} className="cellLink" onClick={handleLinkClick}>
              <img
                src={data.source}
                alt={data.name}
                loading="lazy"
                style={data.size === 'small' ? small : large}
                className="linkImg"
              />
              </Link>
              <h4 className="titleLink">{data.name}</h4>
          </ImageListItem>
        ))}
      </ImageList>
      </Box>
    )
};

export default Gallery;