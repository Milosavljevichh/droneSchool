import Header from "../components/Header"
import { Box } from "@mui/material"

export default function UserLayout({children}){
    return(
        <>
            <Header />
            <Box>
                {children}
            </Box>
        </>
    )
}