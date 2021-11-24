import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import ItemToDo from './ItemToDo';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

function App() {

  const dummyData = [
    'Do groceries shopping',
    'Repair micro-wave',
    'Do laundry',
    'Walk in the park',
    'Clean up desk'
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Box sx={{ width: '100%', maxWidth: 360, color: 'black', bgcolor: 'beige', borderRadius: '3%' }}>
          <Divider />
          <nav aria-label="secondary mailbox folders">
            <List>
              {
                dummyData.map((item, i) => {
                  return ( 
                    <ItemToDo text={item}/>
                  );
                })
              }
            </List>
          </nav>
        </Box>
      </header>  
    </div>
  );
}

export default App;
