import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  SvgIcon
} from '@material-ui/core';
import { Add, Assignment, Build, Visibility, HomeWork, SvgIconComponent, DeleteForever } from '@material-ui/icons';
import { DatabaseContext } from 'contexts/DatabaseContext';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as RxDB from 'rxdb';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: '32px'
  }
}));

interface IListItem {
  title: string;
  icon: SvgIconComponent;
  url?: string;
  subItems?: IListSubItem[];
}

interface IListSubItem {
  title: string;
  icon: SvgIconComponent;
  url?: string;
}

const newObservation = (): IListSubItem => {
  return {
    title: 'Observation',
    icon: Assignment,
    url: '/activities/observation/id'
  };
};

const newTreatment = (): IListSubItem => {
  return {
    title: 'Treatment',
    icon: Build,
    url: '/activities/treatment/id'
  };
};

const newMonitoring = (): IListSubItem => {
  return {
    title: 'Monitoring',
    icon: Visibility,
    url: '/activities/monitoring/id'
  };
};

const basicListItems: IListItem[] = [
  {
    title: 'Observation',
    url: '/activities/:id/observation',
    icon: Add,
    subItems: []
  },
  {
    title: 'Treatment',
    url: '/activities/:id/treatment',
    icon: Add,
    subItems: []
  },
  {
    title: 'Monitoring',
    url: '/activities/:id/monitoring',
    icon: Add,
    subItems: []
  }
  // {
  //   title: 'Photo Gallery',
  //   url: '/activities/photo',
  //   icon: Photo
  // },
  // {
  //   title: 'Map',
  //   url: '/activities/map',
  //   icon: Map
  // },
  // {
  //   title: 'Admin',
  //   url: '/activities/admin',
  //   icon: Lock
  // }
];

const ActivitiesList: React.FC = (props) => {
  const classes = useStyles();

  const database: RxDB.RxDatabase = useContext(DatabaseContext);

  const history = useHistory();

  const [listItems, setListItems] = useState<IListItem[]>(basicListItems);

  // useEffect(() => {
  //   database.collections();
  // }, [database]);

  const addNewForm = (listItem: IListItem, index: number) => {
    const newListItems = [...listItems];

    // get nnew sub item
    let newSubItem = null;
    switch (listItem.title) {
      case 'Observation':
        newSubItem = newObservation();
        break;
      case 'Treatment':
        newSubItem = newTreatment();
        break;
      case 'Monitoring':
        newSubItem = newMonitoring();
        break;
    }
    // add sub item to parent item
    listItem.subItems.push(newSubItem);

    // update list
    newListItems[index] = listItem;

    setListItems(newListItems);
  };

  const removeForm = (listItem, listItemIndex, subItemIndex) => {
    const newListItems = [...listItems];

    // remove item from subItem array
    listItem.subItems.slice(subItemIndex, 1);

    // update list
    newListItems[listItemIndex] = listItem;

    setListItems(newListItems);
  };

  return (
    <List>
      {listItems.map((listItem, listItemIndex) => {
        return (
          <>
            <ListItem button key={listItem.title} onClick={() => addNewForm(listItem, listItemIndex)}>
              <ListItemIcon>
                <SvgIcon component={listItem.icon} />
              </ListItemIcon>
              <ListItemText>{listItem.title}</ListItemText>
            </ListItem>
            {listItem.subItems.map((subItem, subItemIndex) => {
              return (
                <List component="div" disablePadding>
                  <ListItem button key={subItem.url} className={classes.nested}>
                    <ListItemIcon>
                      <SvgIcon component={subItem.icon} />
                    </ListItemIcon>
                    <ListItemText>{subItem.title}</ListItemText>
                    <ListItemSecondaryAction>
                      <IconButton onClick={() => removeForm(listItem, listItemIndex, subItemIndex)}>
                        <DeleteForever />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              );
            })}
          </>
        );
      })}
    </List>
  );
};

export default ActivitiesList;
