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
import { useSelector } from 'react-redux';
import { CSVLink, CSVDownload } from "react-csv";
import { formatDate } from '../../utils/formatDate';

// const csvData = [
//   ["firstname", "lastname", "email"],
//   ["Ahmed", "Tomi", "ah@smthing.co.com"],
//   ["Raed", "Labes", "rl@smthing.co.com"],
//   ["Yezzi", "Min l3b", "ymin@cocococo.com"]
// ];
const headers = ['First Name', 'Last Name', 'Email', 'Score'];

function Leaderboard() {
  const users = useSelector(state => state.dashboard.users);
  const rows = users.map(item => {
    return [item.firstName, item.lastName, item.email, item.score];
  })
  const csvData = [headers, ...rows]
  return (
    <>
      <Typography variant="h2" fontWeight={400} noWrap component='h2' gutterBottom >
        Leaderboard
      </Typography>

      <Box sx={{ textAlign: 'right' }}>
        <CSVLink data={csvData} filename={`${formatDate(Date.now(), 'DD-MM-YYYY')}Report.csv`}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<IosShareIcon />}
            sx={{ mb: 3 }}
            aria-label="Export Csv"
          >
            Export CSV
          </Button>
        </CSVLink>;
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers.map(header => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.firstName}</TableCell>
                <TableCell align="left">{row.lastName}</TableCell>
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