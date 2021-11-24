import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import ItemToDo from './ItemToDo';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { FormHelperText, TextField } from '@mui/material';

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

  const addItem = item => e =>  {
      if(e.key === 'Enter') {  
        let newData = [...data];
        newData.push({text: e.target.value, checked: false});    
        setData(newData);      
    }
  }  

  return (
    <div className="App">
      <header className="App-header">
        <Box
          sx={{ width: '100%', maxWidth: 360, color: 'black', bgcolor: 'beige', marginBottom: '20px', padding: '25px'}}
          >
          <TextField id="newItem" label="New item" variant="standard" onKeyPress={addItem(this)} />
          <FormHelperText>Press "Enter" to add new item in the list</FormHelperText>
        </Box>
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
