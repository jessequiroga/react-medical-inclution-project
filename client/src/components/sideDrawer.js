import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  btn:{
      "focus":{
        borderColor:"#f37878"
      }
  },
  link: {
      color:"black",
    "&:hover": {
    textDecoration: "none",
    color:"blue"

    }
  },
});

const TemporaryDrawer =()=> {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{textAlign:"center"}}>
          <PersonOutlineOutlinedIcon style={{ fontSize: 50 }}/>
          <br/>
          <ListItem button>
          <Link className={classes.link} to="/" ><ListItemText primary="Covid-19 Questionaire" /></Link>
          </ListItem>
          <Divider />
          <ListItem button >
          <Link className={classes.link} to="/disclaimer" ><ListItemText primary="Disclaimer" /></Link>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      {[''].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className={classes.btn} style={{ fontSize: 22, color: "white" }} onClick={toggleDrawer('left', true)}>{anchor} <MenuIcon /></Button>
          <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
export default TemporaryDrawer ;
