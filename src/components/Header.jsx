import { AppBar, Toolbar, Box, Typography, Link } from "@mui/material";

function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Link href="/" color="inherit" underline="none">
            <Typography variant="h6">Nasa APOD App</Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
