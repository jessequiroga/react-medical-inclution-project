import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SideDrawer from './sideDrawer';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import InputLabel from '@material-ui/core/InputLabel';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import AuthOptions from './auth/AuthOptions';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
  },
  link: {
    "&:hover": {
    textDecoration: "none",
    background: "#f37878", 

    }
  },
  avata:{
    margin: theme.spacing(1),
    verticalAlign:"sub",
    marginTop: 5
},

  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const menu = React.createRef();
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const changelanguage = (lang) => () => {
    i18n.changeLanguage(lang);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={changelanguage('en')}>En</MenuItem>
      <MenuItem onClick={changelanguage('ch')}>Ch</MenuItem>
      <MenuItem onClick={changelanguage('ko')}>ko</MenuItem>
      <MenuItem onClick={changelanguage('po')}>Po</MenuItem>
      <MenuItem onClick={changelanguage('spa')}>Spa</MenuItem>
      <MenuItem onClick={changelanguage('fili')}>Fili</MenuItem>
      <MenuItem onClick={changelanguage('indo')}>Indo</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      ref={menu}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem onClick={handleProfileMenuOpen} className={classes.avata}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <GTranslateIcon />
        </IconButton>
        <AuthOptions />

      </MenuItem>
    </Menu>
  );

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: "#eb5757b5", }}>
        <Toolbar>
        <SideDrawer />
        <Typography className={classes.title} variant="h4" noWrap>
          
            <Link className={classes.link} to="/homepage" >
              <Button style={{ fontSize: 22, color: "white" }}>MIP</Button>
            </Link>
          </Typography>
         
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <AuthOptions />
            <IconButton
              style={{ fontSize: 22 }}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            ><span>
                <span style={{fontSize:-1}}><GTranslateIcon /></span>
                <span style={{fontSize:18}}>Language</span>
              </span>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
