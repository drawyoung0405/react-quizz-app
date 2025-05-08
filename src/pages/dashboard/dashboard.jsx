import React from 'react'
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
// get question: https://opentdb.com/api.php?amount=2&category=11&difficulty=medium&type=multiple
// get categories: https://opentdb.com/api_category.php
// get difficulty: https://opentdb.com/api.php?amount=2&category=11&difficulty=medium&type=multiple 

function Dashboard() {
  const navigate = useNavigate();
  const navigateToQuestion = () => {
    navigate('/question');
  }
  return (
    <>
      <Typography variant="h2" noWrap component='h2' gutterBottom sx={{ textAlign: 'center' }} >
        Quiz App
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          size='small'
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <br />
      <br />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="hard">Hard</MenuItem>
        </Select>
      </FormControl>
      <br />
      <br />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem value="multiple">Multiple</MenuItem>
          <MenuItem value="boolean">True/False</MenuItem>
        </Select>
      </FormControl>
      <br />
      <br />
      <FormControl fullWidth>
        <TextField id="outlined-basic" label="Amount of Question" variant="outlined"></TextField>
      </FormControl>

      <Box sx={{ textAlign: 'center', marginTop: 3 }}>
        <Button variant='contained' onClick={navigateToQuestion}>Get Start</Button>
      </Box>
    </>
  )
}
export default Dashboard