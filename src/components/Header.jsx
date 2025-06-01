import { Box, Link, Divider, Typography, IconButton, Button } from "@mui/material"
import ContrastIcon from '@mui/icons-material/Contrast';
import logo from "/logos/logo.png"
import { useLocation } from "react-router-dom";

export default function Header(){

  const location = useLocation();
  const isHome = location.pathname === "/";

    const styles = {
        header:{
            height:'10vh',
            width:'100%',
            boxSizing:'border-box',
            maxHeight:'90px',
            position:'absolute',
            top:'0',
            left:'0',
            backgroundColor: isHome ? "transparent" : "#4A90E2",
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            padding:'2vh 6.5vw',
            zIndex:'5'
        },
        leftContainer:{
            height:'100%',
            display:'flex',
            textDecoration:'none',
            alignItems:'center',
            justifyContent:'flex-start'
        },
        logoImg:{
            maxHeight:'100%',
            width:'auto'
        },
        title:{
            fontSize:'2rem',
            color:'#fff'
        },
        button:{
            backgroundColor:'#5C9BE5',
            border:'1px solid #fff'
        }
    }   

    return(
        <Box sx={styles.header}>
            <Box sx={{height:'100%'}}>
                <Link sx={styles.leftContainer} href="/">
                    <img src={logo} alt="Celestial Solutions" style={styles.logoImg} />
                    <Divider orientation="vertical" variant="middle" flexItem sx={{marginX:'16px',borderWidth:'1px', borderColor:'#6EA6E8'}} />
                    <Typography sx={styles.title}>Drone School Lessons</Typography>
                </Link>
            </Box>
            <Box sx={{display:'flex', gap:'18px'}}>
                <IconButton sx={styles.button}>
                    <ContrastIcon sx={{color:'#fff'}} />    
                </IconButton>
                <Button variant="contained" sx={styles.button}>
                    EN
                </Button>
            </Box>
        </Box>
    )
}