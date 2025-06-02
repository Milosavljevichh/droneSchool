import LessonCreationForm from "../components/LessonCreationForm"
import { Box } from "@mui/material"

export default function CreateLessonPage(){
    const styles={
        container:{
            paddingTop:'13vh',
            minHeight:'90vh'
        }
    }
    return(
        <Box sx={styles.container}>
            <LessonCreationForm />
        </Box>
    )
}