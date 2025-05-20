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
import { useDispatch, useSelector } from 'react-redux';
import { setAmount, setCategory, setDifficulty, setType } from '../../redux/dashboard.action';
// get categories: https://opentdb.com/api_category.php
function Dashboard() {
  const navigate = useNavigate();
  const [categories, setCategories] = React.useState([]);
  const dispatch = useDispatch();
  const { categoryId, type, difficulty, amount } = useSelector(state => state.dashboard)
  React.useEffect(() => {
    async function fetchCategories() {
      const response = await fetch('https://opentdb.com/api_category.php');
      const data = await response.json();
      console.log(data);
      setCategories(data.trivia_categories);
    }
    fetchCategories();
  }, [])


  const navigateToQuestion = () => {
    navigate('/question');
  }
  console.log()
  function onChangeCategory(e) {
    dispatch(setCategory(e.target.value))
  }
  function onChangeDifficulty(e) {
    dispatch(setDifficulty(e.target.value))
  }
  function onChangeType(e) {
    dispatch(setType(e.target.value))
  }
  function onChangeAmount(e) {
    dispatch(setAmount(e.target.value))
  }
  console.log(categoryId)
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
          label="Category"
          size='small'
          value={categoryId || ''}
          onChange={onChangeCategory}
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <br />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Difficulty"
          value={difficulty || ''}
          onChange={onChangeDifficulty}
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
          label="Type"
          value={type || ''}
          onChange={onChangeType}
        >
          <MenuItem value="multiple">Multiple</MenuItem>
          <MenuItem value="boolean">True/False</MenuItem>
        </Select>
      </FormControl>
      <br />
      <br />
      <FormControl fullWidth>
        <TextField onChange={onChangeAmount} value={amount} id="outlined-basic" label="Amount of Question" variant="outlined"></TextField>
      </FormControl>
      <Box sx={{ textAlign: 'center', marginTop: 3 }}>
        <Button variant='contained' onClick={navigateToQuestion}>Get Start</Button>
      </Box>
    </>
  )
}
export default Dashboard