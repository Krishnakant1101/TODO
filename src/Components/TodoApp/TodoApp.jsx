import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
function TodoApp(){

    const Title=useSelector((state)=>{
        return state.count.Task[0].Title
    })
    return(
        <>
          <Box sx={{minHeight:"80vh",width:"100vw",backgroundColor:"red"}}>
             <Button variant="contained">Create New Task</Button>
             <Box>
                Title
             </Box>
             
          </Box>
        </>
    )
}

export default TodoApp;