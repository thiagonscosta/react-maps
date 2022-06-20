import React from 'react';
import { AppBar, Button, CssBaseline, IconButton, ThemeProvider, Toolbar, Typography } from '@mui/material';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position='static' enableColorOnDark>
        <Toolbar>
          <IconButton>

          </IconButton>
          <Typography variant='h6'>xpto</Typography>
        </Toolbar>
        </AppBar>
    </ThemeProvider>
  );
}

export default App;
