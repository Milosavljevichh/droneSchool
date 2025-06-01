import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactSection(){
    const styles = {
        linksContainer:{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            gap:'24px',
            marginBottom:'3vh'
        },
        btn:{
            padding: "8px 28px",
            borderRadius: "20px",
            fontWeight: "bold",
            fontSize: "14px",
            color: "#1976D2",
            backgroundColor:'white',
            cursor: "pointer",
            textDecoration: "none",
        }
    }
    return(
        <Box sx={{margin:'0 auto', width:'fit-content', textAlign:'center', paddingY:'8vh'}}>
            <Typography variant="h4" sx={{color:'white', marginBottom:'3vh'}}>Ready to Take Flight with Celestial Solutions?</Typography>
            <Typography variant="subtitle1" sx={{color:'white', marginBottom:'3vh'}}>Contact us today to begin your professional drone training journey</Typography>
            <Box sx={styles.linksContainer}>
                <Button to={""} sx={{fontWeight:'bold', color:'white', textDecoration:'underline'}  }>{<FontAwesomeIcon icon={faPhone} style={{ fontSize: '18px', color: '#fff', marginRight:'8px' }} />}(+381) 63 1811 115</Button>
                <Button to={"mailto:office@celestial-solutions.net"} sx={{fontWeight:'bold', color:'white', textDecoration:'underline'} }>{<FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '18px', color: '#fff', marginRight:'8px' }} />}office@celestial-solutions.net</Button>
            </Box>
            <Button 
            variant="contained"
            sx={styles.btn}      
            component={Link}
            to={`/sign_up`} 
            onClick={()=>{
            window.scrollTo(0, 0);
            }}
            >
                Enroll now
            </Button>
        </Box>
    )
}