import { Box, Typography } from '@mui/material'
import React from 'react'
import bgImage from '../assets/images/mainBg.png'
import NavigateText from '../components/NavigateText'
import '../css/home.css'

const Home = () => {

  const styles = {
    container: {
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: "no-repeat",
      height: '100vh',
      backgroundPosition: 'center',
      backgroundSize: '100% 100%'
    },
    linkBox:{
      // position: 'absolute',
      // top: '50%',
      // left: '4%',
      // transform: 'translateY(-50%)',
      fontFamily: 'Poiret One, cursive',
    }
  }

  return (
    <Box sx={styles.container}>
      <div className='headDiv'>
        <Typography className='headText' sx={{fontFamily: 'Montserrat, sans-serif', fontSize: 20}}>The Royals of Golechas</Typography>
        <Typography className='headText' sx={{fontFamily: 'Montserrat, sans-serif', fontSize: 15}}>Since 1955</Typography>
      </div>

      <div className='mainContentDiv'>
        <Box sx={styles.linkBox}>
          <NavigateText title={'Gemstones Collection'} link={''} />
          <NavigateText title={'Studs Collection'} link={''} />
          <NavigateText title={'Statement Collection'} link={''} />
          <NavigateText title={'Pearl Collection'} link={''} />
          <NavigateText title={'The Royals Collection'} link={''} />
        </Box>

        <Box>
          <Typography className='headText' sx={{textAlign: 'right'}}>
          A luxury of <br />class and substance
          </Typography>
        </Box>
      </div>
    </Box>
  )
}

export default Home