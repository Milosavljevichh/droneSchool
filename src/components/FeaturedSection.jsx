import { Box, Button } from "@mui/material"
import { Link } from "react-router-dom"
import LessonCard from "./LessonCard"
import { lessons } from "../lessons/featuredLessons.js"

export default function FeaturedSection(){
    const styles={
        lessonContainer:{
            boxSizing:'border-box',
            height:'fit-content',
            width:'100%',
            display:'flex',
            flexWrap:'wrap',
            gap:'2%',
            alignItems:'center',
            justifyContent:'center',
            padding:'0vh 10vw 3vh 10vw'
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
        <Box sx={{paddingY:'3vh', width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Box sx={styles.lessonContainer}>
                {lessons.map((lesson)=>(
                    <LessonCard
                    key={lesson.id}
                    id={lesson.id}
                    cover={lesson.cover}
                    title={lesson.title}
                    description={lesson.description}
                    duration={lesson.duration}
                    level={lesson.level}
                    />
                ))}
            </Box>
            <Button 
            variant="contained"
            sx={styles.btn}      
            component={Link}
            to={`/lessons/`} 
            onClick={()=>{
            window.scrollTo(0, 0);
            }}
            >
                View All Courses
            </Button>
        </Box>
    )
}