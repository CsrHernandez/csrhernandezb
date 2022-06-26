import { Box, LinearProgress, Typography } from "@mui/material"

const Skills = ({
  skill: [name, percent]
}) => {
  return(
    <Box sx={{width: "100"}}>
      <Box sx={{display: "flex"}} py="1em">
        <Box sx={{width:"80%"}}>
          <Typography textAlign="left" component="h3" variant="body2" color="text.secondary">{name}</Typography>
        </Box>
        <Box sx={{width: "20%"}}>
          <Typography textAlign="right" variant="body2" color="text.secondary">{percent}%</Typography>
        </Box>
      </Box>
      <LinearProgress color="success" variant="determinate" value={percent}/>
    </Box>
  )
}

export default Skills