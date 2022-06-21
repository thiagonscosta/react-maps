import React from 'react';
import { Button, CssBaseline, Grid, MenuItem, Select, ThemeProvider } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Grid container>
        <Grid item xs={12} sm={3}>
          <form>
            <Select fullWidth displayEmpty defaultValue={""}>
              <MenuItem value="">
                <em>Selecione uma rota</em>
              </MenuItem>
              <MenuItem value="">
                Rota 1
              </MenuItem>
              <div style={{textAlign: 'center', margin: theme.spacing(1)}}> 
                <Button type="submit" variant="contained">Iniciar rota</Button>
              </div>
            </Select>
          </form>
        </Grid>
        <Grid item xs={12} sm={9}></Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
