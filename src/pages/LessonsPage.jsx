import LessonCard from "../components/LessonCard"
import { Box } from "@mui/material"
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
            paddingTop:'13vh'
        }
    }
    
    return(
        <Box sx={{
            padding:'2vh 6.5vw', width:'fit-content', height:'fit-content', display:'flex', justifyContent:'center'}}>
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