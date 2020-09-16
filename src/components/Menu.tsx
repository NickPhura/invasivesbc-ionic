import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  SvgIcon,
} from "@material-ui/core";
import {
  Assignment,
  Photo,
  Map,
  Lock,
  SvgIconComponent,
} from "@material-ui/icons";

import React from "react";
import { useHistory } from "react-router-dom";
import "./Menu.css";

interface AppPage {
  url: string;
  icon: SvgIconComponent;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Form",
    url: "/home/Form",
    icon: Assignment,
  },
  {
    title: "Observation: Terrestrial Invasive Plant",
    url: "/home/observationTerrestrialInvasivePlant",
    icon: Assignment,
  },
  {
    title: "Photo Gallery",
    url: "/home/photo",
    icon: Photo,
  },
  {
    title: "Map",
    url: "/home/map",
    icon: Map,
  },
  {
    title: "Admin",
    url: "/home/admin",
    icon: Lock,
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
              <SvgIcon component={appPage.icon} />
            </ListItemIcon>
            <ListItemText>{appPage.title}</ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};

export default SideMenu;
