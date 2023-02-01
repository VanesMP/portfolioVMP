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

  return (
    <Box className="box">
      <ImageList variant="masonry" cols={3} gap={20} className="ul">
        {dataList.map((data, index) => (
          <ImageListItem key={index++} className="cellItem">
              <Link to={`/projectPage/${data.id}`} key={data.id} className="cellLink">
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