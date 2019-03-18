import * as React from 'react';
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
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { withStyles, WithStyles } from '@material-ui/core/styles';

library.add(fab, faHome, faEnvelope);

const styles = theme => ({
  drawerPaper: {
    width: 150,
  },
});

interface SidebarItem {
  text: string;
  icon: any;
}

const sidebarItems: SidebarItem[] = [
  { text: 'Home', icon: <FontAwesomeIcon icon="home" /> },
  { text: 'GitHub', icon: <FontAwesomeIcon icon={['fab', 'github']} /> },
  { text: 'twitter', icon: <FontAwesomeIcon icon={['fab', 'twitter']} /> },
  { text: 'Contact', icon: <FontAwesomeIcon icon="envelope" /> },
];

const Sidebar: React.FC<WithStyles> = ({ classes }) => (
  <Drawer
    classes={{
      paper: classes.drawerPaper,
    }}
    variant="permanent"
    open
  >
    <Divider />
    <List>
      <ListItem>
        <ListItemText>
          <Typography variant={'h5'}>Portfolio</Typography>
        </ListItemText>
      </ListItem>
      {sidebarItems.map(item => (
        <ListItem button key={item.text}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>
            <Typography color="inherit">{item.text}</Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default withStyles(styles, { withTheme: true })(Sidebar);
