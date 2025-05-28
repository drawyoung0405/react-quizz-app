import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";

import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

import { setUser } from '../../redux/dashboard.action';

function FinalScore() {
  const dispatch = useDispatch();
  const score = useSelector(state => state.question.score);
  const users = useSelector(state => state.dashboard.users);
  const navigate = useNavigate();
  const { control,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: ""
    },
  });
  console.log('error', errors);

  const onSubmit = (data) => {
    const user = {
      id: Date.now(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      score
    }
    const storageUsers = window.sessionStorage.getItem('users');
    const parsedUsers = JSON.parse(storageUsers || '[]');
    const sessionUsers = [...(parsedUsers.length === 0 ? users : parsedUsers), user];
    window.sessionStorage.setItem('users', JSON.stringify(sessionUsers));
    if(!storageUsers){
      const sessionUsers = [...users, user];
      window.sessionStorage.setItem('users', JSON.stringify(sessionUsers));
    }
    dispatch(setUser(user)); 
    navigate('/leaderboard')
  }

 
  return (
    <>
      <Typography variant="h2" fontWeight={400} noWrap component='h2' gutterBottom >
        Final Score: {score}
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              label="First Name"
              variant="standard"
              error={Boolean(errors.firstName)}
              helperText={errors.firstName ? "First name is required" : ""}
              {...register("firstName", { required: true, maxLength: 20 })}
              {...field}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => <TextField
            sx={{ mb: 3 }}
            fullWidth
            label="Last Name"
            variant="standard"
            error={Boolean(errors.lastName)}
            helperText={errors.lastName ? "First name is required" : ""}
            {...register("lastName", { required: true, maxLength: 20 })}
            {...field}
          />
          }
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => <TextField
            sx={{ mb: 3 }}
            fullWidth
            type='email' 
            label="Email"
            variant="standard"
            error={Boolean(errors.email)}
            helperText={errors.email ? "Email is required" : ""}
            {...register("email", { required: true, maxLength: 20 })}
            {...field}
          />
          }
        />
        <Box sx={{ textAlign: 'right' }}>
          <Button type='submit' variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </form>
      {/* <TextField fullWidth id="standard-basic" label="First Name" variant="standard" sx={{ mb: 3 }} />
      <TextField fullWidth id="standard-basic" label="Last Name" variant="standard" sx={{ mb: 3 }} />
      <TextField fullWidth id="standard-basic" label="Email" variant="standard" sx={{ mb: 3 }} /> */}

    </>
  )
}
export default FinalScore