import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { Question } from './pages/question';
import { FinalScore } from './pages/final-score';
import { MainLayout } from './layouts/main-layout';
import { Leaderboard } from './pages/leaderboard';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/question" element={<MainLayout><Question /></MainLayout>} />
        <Route path="/final-score" element={<MainLayout><FinalScore /></MainLayout>} />
        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/leaderboard" element={<MainLayout><Leaderboard /></MainLayout>} />
      </Routes>
    </>
  )
}

export default App
