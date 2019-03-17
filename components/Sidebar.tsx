import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// import Drawer from '@material-ui/core/Drawer';
// import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faHome, faEnvelope);

interface SidebarItem {
  text: string;
  icon: any;
}

const sidebarItems: SidebarItem[] = [
  { text: 'Home', icon: <FontAwesomeIcon icon="home" /> },
  { text: 'GitHub', icon: <FontAwesomeIcon icon={['fab', 'github']} /> },
  { text: 'twitter', icon: <FontAwesomeIcon icon={['fab', 'twitter']} /> },
  { text: 'Contact Me', icon: <FontAwesomeIcon icon="envelope" /> },
];

const Sidebar: React.FC<{}> = () => (
  <div id="sidebar">
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
            <Typography>{item.text}</Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  </div>
);

export default Sidebar;
