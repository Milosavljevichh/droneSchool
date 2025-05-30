import { Box } from "@mui/material"
import InfoCard from "./InfoCard"

export default function InfoSection(){

    const styles = {
        container:{
            padding:'9vh 10vw',
            display:'flex',
            flexAlign:'center',
            justifyContent:'center',
            flexWrap:'wrap',
            gap:'2%'
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