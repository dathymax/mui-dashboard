import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: 0,
        width: '250px',
        height: '100%',
        backgroundColor: '#eaeaea',
    }
})

const SideMenu = () => {
    const classes = useStyles()

    return (
        <div className={classes.sideMenu}>
            
        </div>
    )
}

export default SideMenu
