import { Box, Typography } from '@mui/material'
import React from 'react'

type myProps = {
    title: string,
    getClickedText: (text: string) => void,
}
const NavigateText:React.FC<myProps> = ({title, getClickedText}) => {

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
        <Typography onClick={()=>getClickedText(title)} textTransform={'uppercase'} sx={styles.titleTxt}>{title}</Typography>
    </Box>
  )
}

export default NavigateText