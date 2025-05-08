import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
function FinalScore() {
  return (
    <>
      <Typography variant="h2" fontWeight={400} noWrap component='h2' gutterBottom >
        Final Score: 0/2
      </Typography>
      <TextField fullWidth id="standard-basic" label="First Name" variant="standard" sx={{mb: 3}}/>
      <TextField fullWidth id="standard-basic" label="Last Name" variant="standard" sx={{mb: 3}}/>
      <TextField fullWidth id="standard-basic" label="Email" variant="standard" sx={{mb: 3}}/>
      <Box sx={{ textAlign: 'right' }}>
        <Button variant="contained" >
          Submit
        </Button>
      </Box>
    </>
  )
}
export default FinalScore