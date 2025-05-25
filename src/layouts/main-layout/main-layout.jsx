import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
function MainLayout({ children }) {
  function handleLogoClick() {
    window.location.href = "/"
  }
  return (
    <>
      <AppBar
        position="fixed"
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography onClick={handleLogoClick} variant="h6" noWrap component="div" sx={{ textAlign: 'center', ":hover": { cursor: 'pointer' } }}>
            Quiz App
          </Typography>
          <Typography variant="h6" noWrap component="div">
            Leaderboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          width: '768px',
          margin: '0 auto',
          maxWidth: '100%',
          marginTop: '64px',
          paddingTop: 3,
        }}>
        <Toolbar />
        {children}
      </Box>
    </>
  )
}
export default MainLayout