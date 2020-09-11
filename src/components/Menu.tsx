import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { PriorityHigh } from "@material-ui/icons";

import React from "react";
import { useHistory } from "react-router-dom";
import {
  imagesOutline,
  imagesSharp,
  fileTrayOutline,
  fileTraySharp,
  mapOutline,
  mapSharp,
  lockClosedOutline,
  lockClosedSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Form",
    url: "/home/Form",
    iosIcon: fileTrayOutline,
    mdIcon: fileTraySharp,
  },
  {
    title: "Photo Gallery",
    url: "/home/photo",
    iosIcon: imagesOutline,
    mdIcon: imagesSharp,
  },
  {
    title: "Map",
    url: "/home/map",
    iosIcon: mapOutline,
    mdIcon: mapSharp,
  },
  {
    title: "Admin",
    url: "/home/admin",
    iosIcon: lockClosedOutline,
    mdIcon: lockClosedSharp,
  },
];

const SideMenu: React.FC = (props) => {
  const history = useHistory();

  return (
    <List>
      {appPages.map((appPage, index) => {
        return (
          <ListItem
            button
            key={appPage.title}
            onClick={() => history.push(appPage.url)}
          >
            <ListItemIcon>
              <PriorityHigh />
            </ListItemIcon>
            <ListItemText>{appPage.title}</ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};

export default SideMenu;
