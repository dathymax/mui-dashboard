import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { AppBar, Collapse, Divider, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Menu, Toolbar, Tooltip } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const useStyles = makeStyles({
    headerAppbar: {
        backgroundColor: 'var(--primary-color) !important',
        boxShadow: 'none !important',
    },
    headerRight: {
        paddingTop: 7,
        lineHeight: '20px',
        textAlign: 'right',
    },
    colorItem: {
        width: '20px',
        height: '20px',
        display: 'inline-block !important',
        lineHeight: '44px',
    },
    collapse: {
        marginTop: 20,
    },
})

const colors = ['#f44336', '#e91e63', '#9c27b0', '#ff8a80','#673ab7','#3f51b5','#2196f3','#009688','#00bcd4']
const Header = () => {
    
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const [show, setShow] = useState(false);

    const handleClickShowMenuTheme = () => {
        setShow(!show);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangeTheme = (e) => {
        const color = e.target.dataset.theme;
        document.documentElement.style.setProperty('--primary-color',color);
        localStorage.setItem('primary-color',JSON.stringify(color));
    }

    return (
        <div className="header">
            <AppBar position="static" className={classes.headerAppbar}>
                <Toolbar>
                    <Grid container>
                        <Grid style={{ paddingTop: 10}} item sm={2}>
                            <img src="./logo/logo.png" alt="" className="header__logo"/>
                        </Grid>
                        <Grid item sm={8}>
                            
                        </Grid>
                        <Grid item sm={2} className={classes.headerRight}>
                            <div className="header__hello">Xin chao</div>
                            <Box sx={{ position: 'relative' }}>
                                <Tooltip title="Account settings">
                                    <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                                        <div className="header__name">Long ML</div>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                <List
                                    sx={{ width: '100%', maxWidth: 260, bgcolor: 'background.paper', color: '#000' }}
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                >
                                    <ListItemButton onClick={handleClickShowMenuTheme}>
                                        <ListItemIcon>
                                            <button style={{backgroundColor: 'var(--primary-color)'}} className="color"></button>
                                        </ListItemIcon>
                                        <ListItemText primary="Change theme" />
                                        {show ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Divider/>
                                    <Collapse className={classes.collapse} in={show} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {colors.map((color,index) => (
                                                <button key={index}  onClick={handleChangeTheme} data-theme={color} className="color" style={{backgroundColor: color}}></button>
                                            ))}
                                        </List>
                                    </Collapse>
                                </List>
                            </Menu>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
