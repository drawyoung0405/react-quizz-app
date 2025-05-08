import React from 'react'
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';

function Question() {
  return (
    <>
      <Typography variant="h2" noWrap component='h2' gutterBottom sx={{ textAlign: 'center', marginBottom: 5 }} >
        Question
      </Typography>
      <Typography noWrap gutterBottom sx={{ marginBottom: 5 }} >
        Who wrote and directed the 1986 film 'Platoon'?
      </Typography>
      <Box>
        <Box sx={{ marginBottom: 2 }}>
          <Button fullWidth variant="contained" >
            Oliver Ston
          </Button>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Button fullWidth variant="contained" >
            Oliver Ston
          </Button>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Button fullWidth variant="contained" >
            Oliver Ston
          </Button>
        </Box>
        <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" noWrap component='div' gutterBottom sx={{ marginBottom: 5 }} >
            Score: 2/2
          </Typography>
          <Typography variant="h5" noWrap component='div' gutterBottom sx={{ marginBottom: 5 }} >
            Timer: 0:30
          </Typography>
        </Box>
      </Box>
    </>
  )
}
export default Question