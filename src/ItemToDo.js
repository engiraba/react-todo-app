import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

function ItemToDo(props) {
    const [done, setCheck] = React.useState(false);

    function switchCheck(e) {
        setCheck(e.target.checked);
    }

    return (
        <ListItem disablePadding > 
            <ListItemButton >
            <Checkbox
                    checked={done}
                    onChange={
                        (event) => switchCheck(event)
                    }
                />
                <ListItemText
                    primary={props.item?.text}
                    sx={{textDecoration: done ? 'line-through' : ''}}
                />
            </ListItemButton >            
        </ListItem>
    );

} export default ItemToDo;