import { Box, Typography, Button } from "@mui/material"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from "react-router-dom"; 


export default function LessonCard({id, cover, title, description, duration, level}){

    const styles={
        card:{
            boxSizing:'border-box',
            maxWidth:'32%',
            height:'fit-content',
            border:'2px #4A90E2 solid',
            boxShadow: "-4px 17px 18px -3px rgba(0, 0, 0, 0.38)",
            borderRadius:'12px',
            backgroundColor:"#ECEFCA",
            color:"#06202B",
            overflow:'hidden',
            marginBottom:'32px'
        },
        cover:{
            height:'40%',
            width:'100%',
            marginBottom:'12px',
            borderBottom:'2px #4A90E2 solid',
            borderRadius:'10px 10px 0 0',
            width: '100%', objectFit: 'cover', aspectRatio: '16/9'
        },
        title:{
            fontSize:'1.1rem',
            fontWeight:'bold'
        },
        description:{
            fontSize:'0.9rem',
            my:'12px',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: 'clamp(2, 3, 4)', 
        }
    }

    return(
        <Box sx={styles.card}>
            <img src={cover} alt="Lesson Cover" style={styles.cover} />
                <Box sx={{
                paddingX:'10px',
                height:'fit-content',
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                alignItems:'center'
                }}>
                    <Box sx={{width:'95%'}}>
                        <Typography sx={styles.title}>{title}</Typography>
                        <Typography sx={[styles.description]}>{description}</Typography>
                    </Box>
                    <Box sx={{width:'95%'}}>
                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                            <Box sx={{display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
                                <AccessTimeIcon />
                                <Typography sx={[styles.description, {margin:0, marginLeft:'8px'}]}>{duration} <span>Minutes</span></Typography>
                            </Box>
                            <Typography sx={styles.description}>{level}</Typography>
                        </Box>
                        <Button 
                        variant="contained"
                        sx={{display:'block',margin:'0 auto', width:'100%', marginY:'16px'}}      
                        component={Link}
                        to={`/lessons/${id}`} 
                        onClick={()=>{
                        window.scrollTo(0, 0);
                        }}
                        >
                            View Lesson
                        </Button>
                    </Box>
                </Box>
        </Box>
    )
}