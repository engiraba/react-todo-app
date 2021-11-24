import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import ItemToDo from './ItemToDo';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

function App() { 

  const dummyData = [{
      text: 'Do groceries shopping',
      checked: false,
    }
    ,{
      text: 'Repair micro-wave',
      checked: false,
    },{
      text: 'Do laundry',
      checked: false,
    },{
      text: 'Walk in the park',
      checked: false,
    },{
      text: 'Clean up desk',
      checked: false,
    }
  ]

  const [data, setData] = React.useState(dummyData);

  const handler = index => e => {
    let newData = [...data];
    newData[index].checked = e.target.value;    
    setData(newData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Box sx={{ width: '100%', maxWidth: 360, color: 'black', bgcolor: 'beige', borderRadius: '3%' }}>
          <Divider />
          <nav aria-label="secondary mailbox folders">
            <List>
              {
                data.sort(function(x, y) {
                  return (x.checked === y.checked) ? 0 : x.checked ? -1 : 1;
               }).map((item, index) => {
                  return ( 
                    <div >
                      <ItemToDo item={item} onChange={handler(index)} /> 
                    </div>
                  )
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
