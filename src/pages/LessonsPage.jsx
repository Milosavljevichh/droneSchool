import LessonCard from "../components/LessonCard"
import dummy from "../assets/dummy.jpg"
import { Box } from "@mui/material"
import { lessons } from "../lessons/index.js"

export default function LessonsPage(){

    const styles={
        lessonContainer:{
            padding:'2vh 6.5vw',
            display:"grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap:'2.5%'
        }
    }
    console.log(lessons)
    return(
        <Box sx={styles.lessonContainer}>
            {/* <LessonCard
                cover={dummy}
                title={"Photogrammetry VS LiDAR"}
                description={"In-depth comparison of Photogrammetry and LiDAR technologies for drone surveying, including accuracy analysis, use cases, and practical applicationsLiDAR technologies for drone surveying, including accuracy analysis, use cases, and practical applications"}
                duration={90}
                level={"Advanced"}
            /> */}
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
    )
}