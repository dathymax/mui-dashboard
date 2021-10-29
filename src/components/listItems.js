import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles'
import { SupervisorAccount, AddCircleOutline } from '@mui/icons-material';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  list: {
    backgroundColor: '#e5e5e5 !important',
  },
  link: {
    textDecoration: 'none', 
    color: '#000',
  }
})

export default function NestedList() {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      className={classes.list}
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader style={{ backgroundColor: '#e5e5e5'}} component="div" id="nested-list-subheader">
          Dash Board
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Action" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link
            className={classes.link}
            to="/list"
          >
            <ListItemButton>
              <ListItemIcon>
                <SupervisorAccount/>
              </ListItemIcon>
              <ListItemText primary="Danh sach nhan vien" />
            </ListItemButton>
          </Link>
          <Link
            className={classes.link}
            to="/create"
          >
            <ListItemButton>
              <ListItemIcon>
                <AddCircleOutline/>
              </ListItemIcon>
              <ListItemText primary="Them nhan vien" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </List>
  );
}