import {
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
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
    title: 'Photo Gallery',
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

const SideMenu: React.FC = () => {
  const history = useHistory();

  return (
    <MenuList>
      {appPages.map((appPage, index) => {
        return (
          <MenuItem
            onClick={() => history.push(appPage.url)}
            key={appPage.title}
          >
            <ListItemIcon>
              <PriorityHigh />
            </ListItemIcon>
            <ListItemText>{appPage.title}</ListItemText>
          </MenuItem>
        );
      })}
    </MenuList>
  );
};

export default SideMenu;
