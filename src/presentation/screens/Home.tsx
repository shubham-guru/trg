import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import bgImage from "../assets/images/mainBg.png";
import NavigateText from "../components/NavigateText";
import "../css/home.css";
import { NavBarText } from "../../domain/constants/NavBarText";

const Home = () => {

  const [subNavText, setSubNavText] = useState<any>({});
  const styles = {
    container: {
      // backgroundImage: `url(${bgImage})`,
      // backgroundRepeat: "no-repeat",
      height: "100vh",
      backgroundColor: "#000",
      backgroundPosition: "center",
      backgroundSize: "100% 100%",
    },
    linkBox: {
      fontFamily: "Poiret One, cursive",
    },
  };

  const handleNav = (text: string) => {
    if(text === 'Gemstones Collection'){
      setSubNavText({
        text: 'READ',
        link: '#'
      })
    }else{
      console.log('error')
    }
  };

  return (
    <Box sx={styles.container}>
      <div className="headDiv">
        <Typography
          className="headText"
          sx={{ fontFamily: "Montserrat, sans-serif", fontSize: 20 }}>
          The Royals of Golechas
        </Typography>
        <Typography
          className="headText"
          sx={{ fontFamily: "Montserrat, sans-serif", fontSize: 15 }}>
          Since 1955
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
                  getClickedText={handleNav}
                />
              );
            })}
          </Box>
        <div className='line' />
        {
            <Typography color={'#fff'}>{subNavText.text}</Typography>
        }
      </div>

        <Box>
          <Typography className="headText" sx={{ textAlign: "right" }}>
            A luxury of <br />
            class and substance
          </Typography>
        </Box>
      </div>
    </Box>
  );
};

export default Home;
