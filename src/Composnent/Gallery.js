import React, {useEffect, useState} from "react";
import "../Styles/gallery.css";
import {getLinkItems} from "../api.js";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function Gallery() {

    const [items, setItems] = useState([]);

    // access the items array in the JSON file
      useEffect(() => {
        getLinkItems()
            .then(data => {
                console.log('data : ', data)
                setItems(data);
            });
    }, []);
        
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
        {items.map((item, index) => (
          <ImageListItem key={index++} className="cellItem">
            <img
              src={item.source}
              alt={item.title}
              loading="lazy"
              style={item.size === 'small' ? small : large}
              className="linkImg"
            />
            <h4 className="titleLink">{item.title}</h4>
          </ImageListItem>
        ))}
      </ImageList>
      </Box>
    )
};

export default Gallery;