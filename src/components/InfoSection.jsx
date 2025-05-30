import { Box } from "@mui/material"
import InfoCard from "./InfoCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faShieldHalved, faGamepad } from '@fortawesome/free-solid-svg-icons';

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
            iconPath: <FontAwesomeIcon icon={faUserTie} style={{ fontSize: '36px', color: '#2563eb' }} /> ,
            title: 'Professional Instructors' ,
            description: 'Learn from Celestial Solutions certified experts with years of experience'
        },
        {
            iconPath: <FontAwesomeIcon icon={faGamepad} style={{ fontSize: '36px', color: '#2563eb' }} /> ,
            title: 'Hands-on Training' ,
            description: 'Get real flight experience with our advanced drone fleet'
        },
        {
            iconPath: <FontAwesomeIcon icon={faShieldHalved} style={{ fontSize: '36px', color: '#2563eb' }} /> ,
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