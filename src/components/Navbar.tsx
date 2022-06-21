import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import DriveEtaIcon from '@mui/icons-material/DriveEta';

function Navbar() {
    return (
        <AppBar position="static" enableColorOnDark>
        <Toolbar>
          <IconButton color="inherit" edge="start">
            <DriveEtaIcon />
          </IconButton>
          <Typography variant="h6">xpto</Typography>
        </Toolbar>
        </AppBar>
    );
}

export default Navbar;