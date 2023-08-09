import { Box } from "@mui/material";
import React, { useState } from "react";
import bgImage from "../assets/images/mainBg.jpg";
import NavigateText from "../components/NavigateText";
import "../css/home.css";
import { NavBarText } from "../../domain/constants/NavBarText";
import { Col, Row, Typography, Image } from "antd";
import divider from '../assets/images/divider.svg'

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
      {/* <div className="headDiv"> */}
        {/* <Typography
          className="headText"
          sx={{ fontFamily: "Cinzel, serif", fontSize: 20}}>
          The Royals of Golecha's
          <Typography
          className="headText"
          sx={{ fontFamily: "Cinzel, serif", fontSize: 14 }}>
          Since 1955
        </Typography>
        </Typography>

        <Typography className="headText" sx={{ textAlign: "right", fontFamily: 'Jost, sans-serif', letterSpacing: 2 }}>
            A luxury of <br />
            class and substance
          </Typography> */}
      {/* </div> */}

      <Row className="mainRow">
      <Col span={24}>
        <Typography.Title level={2} className="headText">
            The Royals of Golecha's
        </Typography.Title>
      
        <Typography.Title level={5} className="headText">
            Since 1955
        </Typography.Title>
        </Col>

          <Col span={24}>
          <Image src={divider} alt="divider" width={100} preview={false} />
        </Col>

        <Col span={24}>
        <Typography.Title level={5} className="tagLine">
          A luxury of class and substance
        </Typography.Title>
        </Col>

      </Row>
        {/* <div style={{display: 'flex', alignItems: 'center'}}>
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
      </div> */}
       
    </Box>
  );
};

export default Home;
