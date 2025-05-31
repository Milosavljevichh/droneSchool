import PlanCard from "../components/PlanCard"
import FAQSection from "../components/FAQ"
import { Box } from "@mui/material"

export default function PaymentPlanPage(){

    const plans = [
        {
            name:'Starter',
            desc:'Perfect for beginners starting their drone journey',
            price:'19.99',
            droneCredits:'50'
        },
        {
            name:'Basic',
            desc:'Perfect for those serious about learning',
            price:'24.99',
            droneCredits:'150',
            isMostPopular: true
        },
        {
            name:'Pro',
            desc:'Perfect for professionals',
            price:'39.99',
            droneCredits:'250',
        },
    ]

    return(
        <Box sx={{minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', paddingTop:'13vh'}}>
            <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center', width:'100%'}}>
            {
                plans.map(plan=>(
                    <PlanCard name={plan.name} price={plan.price} droneCredits={plan.droneCredits} isMostPopular={plan.isMostPopular ? plan.isMostPopular : false} />
                ))
            }
            </Box>
            <FAQSection />
        </Box>
    )
}