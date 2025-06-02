import LessonCard from "../components/LessonCard"
import { Box, Button, Link } from "@mui/material"
import { lessons } from "../lessons/index.js"

export default function LessonsPage(){

    const styles={
        lessonContainer:{
            minHeight:'100vh',
            height:'fit-content',
            display:'flex',
            flexWrap:'wrap',
            gap:'2%',
            alignItems:'flex-start',
            justifyContent:'left',
            paddingTop:'3vh'
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
            color: 'white',
            alignSelf:'flex-start'
        }
    }
    
    return(
        <Box sx={{
            padding:'15vh 6.5vw 2vh 6.5vw',
            width:'fit-content',
            height:'fit-content',
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center'
            }}>
                <Button component={Link} href="log_in" variant="outline" sx={styles.logInButton}>
                    New Lesson
                </Button>
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
        </Box>
    )
}