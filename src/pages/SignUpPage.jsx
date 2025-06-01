import { Box } from "@mui/material"
import SignUpForm from "../components/SignUpForm"

export default function SignUpPage(){
    return(
        <Box sx={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', pt:'10vh'}}>
            <SignUpForm />
        </Box>
    )
}