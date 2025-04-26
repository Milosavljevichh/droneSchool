import { Box, Link, Divider, Typography, IconButton, Button } from "@mui/material"
import ContrastIcon from '@mui/icons-material/Contrast';
import logo from "../assets/logo.png"

export default function Header(){

    const styles = {
        header:{
            height:'8vh',
            // width:'87%',
            backgroundColor:'#4A90E2',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            padding:'2vh 6.5vw'
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
                    <Divider orientation="vertical" variant="middle" flexItem sx={{marginX:'16px',borderWidth:'2px', borderColor:'#6EA6E8'}} />
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