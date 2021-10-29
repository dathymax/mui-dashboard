import { makeStyles } from '@mui/styles';
import React from 'react';
import NestedList from './listItems';

const useStyles = makeStyles({
    sideMenu: {
        width: '250px',
        height: '100vh',
        backgroundColor: '#eaeaea',
    },
})

const SideMenu = () => {
    const classes = useStyles()

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.sideMenu}>
            <NestedList/>
        </div>
    )
}

export default SideMenu
