import { Box, Link } from '@mui/material'
import React from 'react'

type myProps = {
    title: string,
    getText: (text: string) => void
}
const NavigateText:React.FC<myProps> = ({title, getText}) => {

    const styles = {
        titleTxt: {
            color: '#fff',
            letterSpacing: 2,
            fontFamily: 'Jost, sans-serif',
            onwebkitanimationend: 'scale-up-center 0.8s ease-out',
	        animation: 'scale-up-center 0.8s ease-out',
            marginBottom: 2,
            textAlign: 'left',
            cursor: 'pointer',
            textDecoration: 'none'
        }
    }

    const handleHover = (e: any) => {
        getText(e.target.innerHTML)
    }

  return (
    <Box sx={{display: 'flex'}}>
        <Link onMouseEnter={handleHover} textTransform={'uppercase'} sx={styles.titleTxt}>{title}</Link>
    </Box>
  )
}

export default NavigateText