import clsx from "clsx";
import {
  AppBar,
  CssBaseline,
  IconButton,
  makeStyles,
  Drawer,
  Divider,
  Typography,
  Badge,
  Toolbar,
} from "@material-ui/core";
import { Notifications, Menu, ChevronLeft } from "@material-ui/icons";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorDialog from "../components/common/ErrorDialog";
import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import SideMenu from "../components/Menu";
import "./PublicLayout.scss";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  publicLayoutRoot: {
    display: "flex",
    height: "100%",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    // marginTop: "-64px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    // marginTop: "-64px",
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  content: {
    flex: 1,
    marginTop: "64px",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

// render() {
//     const checkboxes = React.Children.map(this.props.children, checkbox =>
//       React.cloneElement(checkbox, {
//         name: this.props.name,
//         checked: this.props.checkedValues.includes(checkbox.props.value),
//         onChange: this.handleCheckboxChange.bind(this)
//       })
//     );

const PublicLayout: React.FC = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.publicLayoutRoot}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <Menu />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Invasives BC
          </Typography>
          {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <Notifications />
            </Badge>
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <SideMenu />
      </Drawer>
      <main className={classes.content}>
        {/* <ErrorBoundary FallbackComponent={ErrorDialog}> */}
        {React.Children.map(props.children, (child: any) => {
          return React.cloneElement(child, { classes: classes });
        })}
        {/* </ErrorBoundary> */}
      </main>
    </div>
  );

  //   return (
  //     <>
  //       <div className="App-wrapper">
  //         <Header />
  //         <Container className="App-content">
  //           <ErrorBoundary FallbackComponent={ErrorDialog}>
  //             {React.Children.map(props.children, (child: any) =>
  //               React.cloneElement(child, { useStyles })
  //             )}
  //           </ErrorBoundary>
  //         </Container>
  //         <Footer />
  //       </div>
  //     </>
  //   );
};

export default PublicLayout;
