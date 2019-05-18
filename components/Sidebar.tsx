import React, { FC } from 'react';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
// import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faUser,
  faBriefcase,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { withStyles, WithStyles } from '@material-ui/core/styles';

library.add(fab, faUser, faBriefcase, faEnvelope);

const styles = theme => ({
  drawerPaper: {
    width: 150,
  },
});

interface SidebarItem {
  text: string;
  path: string;
  icon: any;
}

const sidebarItems: SidebarItem[] = [
  { text: 'uitspitss', path: '/about', icon: <FontAwesomeIcon icon="user" /> },
  { text: 'Works', path: '/works', icon: <FontAwesomeIcon icon="briefcase" /> },
  {
    text: 'Contact',
    path: '/contact',
    icon: <FontAwesomeIcon icon="envelope" />,
  },
];

const sidebarExternalItems: SidebarItem[] = [
  {
    text: 'GitHub',
    path: 'https://github.com/uitspitss?tab=repositories',
    icon: <FontAwesomeIcon icon={['fab', 'github']} />,
  },
  {
    text: 'Twitter',
    path: 'https://twitter.com/uitspitss',
    icon: <FontAwesomeIcon icon={['fab', 'twitter']} />,
  },
]

const Sidebar: FC<WithStyles> = ({ classes }) => (
  <Drawer
    classes={{
      paper: classes.drawerPaper,
    }}
    variant="permanent"
    open
  >
    <Divider />
    <List>
      <Link href="/">
        <ListItem>
          <ListItemText>
            <Typography variant={'h5'}>Portfolio</Typography>
          </ListItemText>
        </ListItem>
      </Link>
      {sidebarItems.map(item => (
        <Link href={`${item.path}`} key={item.path}>
          <ListItem button key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>
              <Typography color="inherit">{item.text}</Typography>
            </ListItemText>
          </ListItem>
        </Link>
      ))}
      {sidebarExternalItems.map(item => (
        <a href={`${item.path}`} key={item.path}>
          <ListItem button key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>
              <Typography color="inherit">{item.text}</Typography>
            </ListItemText>
          </ListItem>
        </a>
      ))}
    </List>
  </Drawer>
);

export default withStyles(styles, { withTheme: true })(Sidebar);
