import React from "react";
import "../Styles/gallery.css";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme } from "@mui/material/styles";
import { ThemeProvider } from '@mui/material/styles';
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

  const theme = useTheme();

  const getCols = () => {
    if (theme.breakpoints.values <= 'md') {
      return 2;
    } else if (theme.breakpoints.values <= 'lg' ) {
      return 2;
    } else {
      return 3;
    }
  };

  console.log('theme:', theme);
  console.log('breakpoint:', theme.breakpoints.values);
  // const isXs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  // const isSm = useMediaQuery(theme => theme.breakpoints.between('sm', 'md'));
  // const isLg = useMediaQuery(theme => theme.breakpoints.up('lg'));

  // console.log(`Breakpoint actuel: xs=${isXs}, sm=${isSm}, lg=${isLg}`);

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ overflowY: 'unset' }} className="box">
      <ImageList variant="masonry" cols={getCols()} gap={20} className="ul">
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
      </ThemeProvider>
    )
};

export default Gallery;