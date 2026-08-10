import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function App() {
  
  return (
    <div>
      <h1> My app</h1>
      <Button variant="contained">
        Click Me
      </Button>
      <Button variant='outlined'>Cancel</Button>
      <Button variant="text">Learn More</Button>

      <Box 
      sx={{
        padding:4,
        backgroundColor: '#333333',
        color:'#1976d2',
        borderRadius: 2,
        }}
        >
        <h1> Box component</h1>
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
  );
}

export default App;