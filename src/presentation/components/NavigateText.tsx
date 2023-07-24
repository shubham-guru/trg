import { Box, Typography } from '@mui/material'
import React from 'react'
import { LuArrowRight } from 'react-icons/lu';

type myProps = {
    title: string,
    link: string
}
const NavigateText:React.FC<myProps> = ({title, link}) => {
    const styles = {
        titleTxt: {
            color: '#fff',
            letterSpacing: 2,
            fontFamily: 'Jost, sans-serif',
            onwebkitanimationend: 'scale-up-center 0.8s ease-out',
	        animation: 'scale-up-center 0.8s ease-out',
            marginBottom: 2,
            textAlign: 'left',
            cursor: 'pointer'
        }
    }
  return (
    <Box sx={{display: 'flex'}}>
        <Typography onClick={()=>{}} textTransform={'uppercase'} sx={styles.titleTxt}>{title}</Typography>
        <LuArrowRight color='#fff' style={{marginLeft: 3}} size={28} strokeWidth={0.75} />
    </Box>
  )
}

export default NavigateText