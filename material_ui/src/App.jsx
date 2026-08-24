import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationIcon from '@mui/icons-material/Notifications';
import DeleteIcon from '@mui/icons-material/Delete';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';
import Icon from '@mui/material/Icon';
import Switch from '@mui/material/Switch';

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

        <h1>Material UI</h1>

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

        <Avatar>H</Avatar>

        <Avatar sx={{ bgcolor: deepOrange[500] }}>
          N
        </Avatar>

        <IconButton>
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
            
          </Badge>
          <Badge badgeContent={8} color='primary'>
              <NotificationIcon />
          </Badge>
        </IconButton>
          <Tooltip title="Delete"arrow>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Box sx={{ display: 'flex' }}>
                <CircularProgress aria-label="Loading..."/>
          </Box>
      </div>
      <div>
        <Switch defaultChecked />
      </div>
    </ThemeProvider>
  );
}

export default App;