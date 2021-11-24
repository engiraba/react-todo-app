import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

function ItemToDo(props) {
    const [done, setCheck] = React.useState(false);

    return (
        <ListItem disablePadding > 
            <ListItemButton >
            <Checkbox
                    checked={done}
                    onChange={
                        (event) => setCheck(event.target.checked)
                    }
                />
                <ListItemText
                    primary={props.text}
                />
            </ListItemButton >            
        </ListItem>
    );

} export default ItemToDo;