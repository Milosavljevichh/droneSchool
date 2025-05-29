import { Box } from "@mui/material"
import InfoCard from "./InfoCard"

export default function InfoSection(){

    const styles = {
        container:{
            padding:'5vh 48px',
            display:'flex',
            flexAlign:'center',
            justifyContent:'center',
            flexWrap:'wrap',
            gap:'50px'
        }
    }

    const cardContent = [
        {
            iconPath: '' ,
            title: 'Professional Instructors' ,
            description: 'Learn from Celestial Solutions certified experts with years of experience'
        },
        {
            iconPath: '' ,
            title: 'Hands-on Training' ,
            description: 'Get real flight experience with our advanced drone fleet'
        },
        {
            iconPath: '' ,
            title: 'Safety First' ,
            description: 'Industry-leading safety training and protocols'
        },
    ]

    return(
        <Box style={styles.container}>
            {cardContent.map((card)=>(
                <InfoCard title={card.title} description={card.description} icon={card.iconPath} />
            ))}
        </Box>
    )
}