import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#7c3aed',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>

        <h1>My app</h1>

        <Button variant="contained" color="primary">
          Click Me
        </Button>

        <Button variant="outlined" color="primary">
          Cancel
        </Button>

        <Button color="primary">
          Learn More
        </Button>

        <Box
          sx={{
            padding: 4,
            backgroundColor: '#333333',
            color: 'primary.main',
            borderRadius: 2,
          }}
        >
          <h1>Box component</h1>
        </Box>

        <Card>
          <CardContent>
            <Typography variant="h5">
              Product
            </Typography>

            <Typography variant="body1">
              MUI Card
            </Typography>
          </CardContent>
        </Card>

      </div>
    </ThemeProvider>
  );
}

export default App;