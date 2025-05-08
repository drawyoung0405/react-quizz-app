import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IosShareIcon from '@mui/icons-material/IosShare';
function createData(firstname, lastname, email, score) {
  return { firstname, lastname, email, score };
}

const rows = [
  createData('Hoa', 'Vo', 'hoa@gmail.com', 24),
  createData('Hoa', 'Vo', 'hoa@gmail.com', 24),
  createData('Hoa', 'Vo', 'hoa@gmail.com', 24),
  createData('Hoa', 'Vo', 'hoa@gmail.com', 24),
  createData('Hoa', 'Vo', 'hoa@gmail.com', 24),
];
function Leaderboard() {
  return (
    <>
      <Typography variant="h2" fontWeight={400} noWrap component='h2' gutterBottom >
        Leaderboard
      </Typography>
      <Box sx={{ textAlign: 'right' }}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<IosShareIcon />}
          sx={{ mb: 3 }}
          aria-label="Export Csv"
        >
          Export CSV
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.firstname}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.firstname}</TableCell>
                <TableCell align="left">{row.lastname}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ textAlign: 'right', marginTop: 3 }}>
        <Button variant="contained" >
          Submit
        </Button>
      </Box>
    </>
  )
}
export default Leaderboard