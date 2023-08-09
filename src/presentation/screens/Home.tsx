import { Box, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import bgImage from "../assets/images/mainBg.jpg";
import NavigateText from "../components/NavigateText";
import "../css/home.css";
import { NavBarText } from "../../domain/constants/NavBarText";

const Home = () => {

  const [linkOne, setLinkOne] = useState<string>('');
  const [linkTwo, setLinkTwo] = useState<string>('');

  const styles = {
    container: {
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: "no-repeat",
      height: "100vh",
      backgroundColor: "#000",
      backgroundPosition: "center",
      backgroundSize: "100%",
    },
    linkBox: {
      fontFamily: "Poiret One, cursive",
    },
    linkText: {
      fontFamily: 'Jost, sans-serif', 
      color: '#fff', 
      textDecoration: "none",
      margin: 5,
      letterSpacing: 2,
      lineHeight: 2
    }
  };

  const handleText = (text: string) => {
      if(text === 'Gemstones Collection'){
        setLinkOne('https://google.com')
        setLinkTwo('https://google.com')
      }
  }


  return (
    <Box sx={styles.container}>
      <div className="headDiv">
        <Typography
          className="headText"
          sx={{ fontFamily: "Cinzel, serif", fontSize: 20}}>
          The Royals of Golechas
          <Typography
          className="headText"
          sx={{ fontFamily: "Cinzel, serif", fontSize: 14 }}>
          Since 1955
        </Typography>
        </Typography>

        <Typography className="headText" sx={{ textAlign: "right", fontFamily: 'Jost, sans-serif', letterSpacing: 2 }}>
            A luxury of <br />
            class and substance
          </Typography>
      </div>

      <div className="mainContentDiv">
        <div style={{display: 'flex', alignItems: 'center'}}>
          <Box sx={styles.linkBox}>
            {NavBarText.map((item: string, index) => {
              return (
                <NavigateText
                  title={item}
                  key={index}
                  getText={handleText}
                />
              );
            })}
          </Box>
        <div className='line' />
        {
          <div className="linkDiv">
            <Typography>
              <Link href={linkOne} style={styles.linkText} textTransform={'uppercase'}>Read</Link>
            </Typography>

            <Typography>
              <Link href={linkTwo} style={styles.linkText} textTransform={'uppercase'}>Contact</Link>
            </Typography>
          </div>
        }
      </div>

      </div>
    </Box>
  );
};

export default Home;
