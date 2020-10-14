import React, { FC } from 'react';
import Link from 'next/link';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faUser,
  faBriefcase,
  faEnvelope,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 150;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      marginLeft: drawerWidth,
      background: 'transparent',
      boxShadow: 'none',
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    menuButton: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
    },
  }),
);

interface SidebarItem {
  text: string;
  path: string;
  icon: JSX.Element;
}

const sidebarItems: SidebarItem[] = [
  {
    text: 'uitspitss',
    path: '/about',
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    text: 'Works',
    path: '/works',
    icon: <FontAwesomeIcon icon={faBriefcase} />,
  },
  {
    text: 'Hobby Works',
    path: '/hobby-works',
    icon: <FontAwesomeIcon icon={faLaptopCode} />,
  },
  {
    text: 'Contact',
    path: '/contact',
    icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
  {
    text: 'GitHub',
    path: '/github',
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
];

const sidebarExternalItems: SidebarItem[] = [
  {
    text: 'Twitter',
    path: 'https://twitter.com/uitspitss',
    icon: <FontAwesomeIcon icon={faTwitter} />,
  },
];

const Sidebar: FC = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const classes = useStyles({});
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <div>
      <Divider />
      <List>
        <Link href="/">
          <a>
            <ListItem>
              <ListItemText>
                <Typography variant="h5">Portfolio</Typography>
              </ListItemText>
            </ListItem>
          </a>
        </Link>
        {sidebarItems.map((item) => (
          <Link href={`${item.path}`} key={item.path}>
            <a>
              <ListItem button key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>
                  <Typography color="inherit">{item.text}</Typography>
                </ListItemText>
              </ListItem>
            </a>
          </Link>
        ))}
        {sidebarExternalItems.map((item) => (
          <a href={item.path} target="_blank" rel="noopener" key={item.text}>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>
                <Typography color="inherit">{item.text}</Typography>
              </ListItemText>
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default Sidebar;
