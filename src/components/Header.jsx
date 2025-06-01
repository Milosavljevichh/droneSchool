import { Box, Link, Divider, Typography, IconButton, Button } from "@mui/material"
import logo from "/logos/logo.png"
import { useLocation } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {

    const location = useLocation();
    const isHome = location.pathname === "/";

    const styles = {
        header: {
            height: '10vh',
            width: '100%',
            boxSizing: 'border-box',
            maxHeight: '90px',
            position: 'absolute',
            top: '0',
            left: '0',
            backgroundColor: isHome ? "transparent" : "#4A90E2",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '2vh 6.5vw',
            zIndex: '5'
        },
        leftContainer: {
            height: '100%',
            display: 'flex',
            textDecoration: 'none',
            alignItems: 'center',
            justifyContent: 'flex-start'
        },
        navLinks: {
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
        },
        navLink: {
            color: 'white',
            fontWeight: 500,
            textTransform: 'none',
            fontSize: '1rem',
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline',
            },
        },
            logoImg: {
                maxHeight: '100%',
                width: 'auto'
            },
            title: {
                fontSize: '2rem',
                color: '#fff'
            },
            logInButton: {
                padding: "8px 24px",
                borderRadius: "25px",
                border: "none",
                fontWeight: "600",
                fontSize: "0.9rem",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                transition: "background-color 0.3s ease",
                backgroundColor: '#4A90E2',
                color: 'white'
            },
            signUpButton: {
                padding: "8px 24px",
                borderRadius: "25px",
                border: "1px solid #4A90E2",
                fontWeight: "600",
                fontSize: "0.9rem",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                transition: "background-color 0.3s ease",
                color: 'white'
            },
        }   

    return(
        <Box sx = { styles.header } >
            <Box sx={{height:'100%', display:'flex', alignItems:'center', gap:'24px'}}>
                <Link sx={styles.leftContainer} href="/">
                    <img src={logo} alt="Celestial Solutions" style={styles.logoImg} />
                    {/* <Divider orientation="vertical" variant="middle" flexItem sx={{marginX:'16px',borderWidth:'1px', borderColor:'#6EA6E8'}} /> */}
                    {/* <Typography sx={styles.title}>Drone School Lessons</Typography> */}
                </Link>
                
            <Box sx={styles.navLinks}>
                <Link component={RouterLink} to="/" sx={styles.navLink}>
                Home
                </Link>
                <Link component={RouterLink} to="/payment_plans" sx={styles.navLink}>
                Plans
                </Link>
                <Link component={RouterLink} to="/about" sx={styles.navLink}>
                About Us
                </Link>
                <Link href="https://celestial-solutions.net/" target="_blank" rel="noopener" sx={styles.navLink}>
                Company
                </Link>
            </Box>
            </Box>
            <Box sx={{display:'flex', gap:'18px'}}>
                <Button component={Link} href="log_in" variant="outline" sx={styles.logInButton}>
                    Log in
                </Button>
                <Button component={Link} href="sign_up" sx={styles.signUpButton}>
                    Sign up
                </Button>
            </Box>
        </Box >
    )
}