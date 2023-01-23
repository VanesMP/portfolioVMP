import React, {useEffect, useState} from "react";
import "../Styles/gallery.css";
import {getLinkItems} from "../api.js";
// import Box from '@mui/material/Box';
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
    width: '400px',
    height: '400px',
    };

    let large = {
    width: '400px',
    height: '550px',
    }

  return (
    <div className="containerGallery">
    
      <ImageList variant="masonry" cols={3} gap={6}>
        {items.map((item) => (
          <ImageListItem key={item.title}>
            <img
              src={`${item.source}?w=248&fit=crop&auto=format`}
            //   srcSet={`${item.source}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={item.size === 'small' ? small : large}
              className="imageGallery"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    )
};

export default Gallery;