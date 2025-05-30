import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection"
import FeaturedSection from "../components/FeaturedSection"
import ContactSection from "../components/ContactSection"
import { Box } from "@mui/material"

export default function HomePage(){
    
    return(
        <Box>
            <HeroSection />
            <InfoSection />
            <FeaturedSection />
            <ContactSection />
        </Box>
    )
}