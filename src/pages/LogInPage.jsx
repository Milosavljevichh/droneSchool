import { Box } from "@mui/material"
import LoginForm from "../components/LogInForm"

export default function LogInPage(){
    return(
        <Box sx={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', pt:'10vh'}}>
            <LoginForm />
        </Box>
    )
}