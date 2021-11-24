import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';

function App() {
  const [dense, setDense] = React.useState(false);

  const dummyData = [
    'Do groceries shopping',
    'Repair micro-waves'
  ]

  return (
    <div className="App">
      <header className="App-header">
      <Box sx={{ width: '100%', maxWidth: 360, color: 'black', bgcolor: 'beige', borderRadius: '3%' }}>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
            <Checkbox
              checked={dense}
              onChange={(event) => setDense(event.target.checked)}
            />
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>

        {
          dummyData.map((item, i) => {
            return <ul> {item} </ul>;
          })
        }
      </header>
    </div>
  );
}

export default App;
