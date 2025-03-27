import LessonCard from "../components/LessonCard"
import dummy from "../assets/dummy.jpg"
import { Box } from "@mui/material"

export default function LessonsPage(){

    const styles={
        lessonContainer:{
            padding:'2vh 6.5vw',
            display:"grid",
            gridTemplateColumns: "repeat(3, minmax(250px, 1fr))",
            gap:'1%'
        }
    }

    return(
        <Box sx={styles.lessonContainer}>
            <LessonCard
                cover={dummy}
                title={"Photogrammetry VS LiDAR"}
                description={"In-depth comparison of Photogrammetry and LiDAR technologies for drone surveying, including accuracy analysis, use cases, and practical applicationsLiDAR technologies for drone surveying, including accuracy analysis, use cases, and practical applications"}
                duration={90}
                level={"Advanced"}
            />
            <LessonCard
                cover={dummy}
                title={"Photogrammetry VS LiDAR"}
                description={"In-depth comparison of Photogrammetry and LiDAR technologies for drone surveying, including accuracy analysis, use cases, and practical applicationsLiDAR technologies for drone surveying, including accuracy analysis, use cases, and practical applications"}
                duration={90}
                level={"Advanced"}
            />
            <LessonCard
                cover={dummy}
                title={"Photogrammetry VS LiDAR"}
                description={"fvjysrgbyirs uvrshk fesdhoul In-depth comparison of Photogrammetry and LiDAR technologies for drone surveying, including accuracy analysis, use cases, and practical applicationsLiDAR technologies for drone surveying, including accuracy analysis, use cases, and practical applications"}
                duration={90}
                level={"Advanced"}
            />
            <LessonCard
                cover={dummy}
                title={"Photogrammetry VS LiDAR"}
                description={"fvjysrgbyirs uvrshk fesdhoul In-depth comparison of Photogrammetry and LiDAR technologies for drone surveying, including accuracy analysis, use cases, and practical applicationsLiDAR technologies for drone surveying, including accuracy analysis, use cases, and practical applications"}
                duration={90}
                level={"Advanced"}
            />
        </Box>
    )
}