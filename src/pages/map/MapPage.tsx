import clsx from "clsx";
import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import MapContainer from "../../components/map/MapContainer";
import "./MapPage.css";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
  },
}));

const MapPage: React.FC = (props: any) => {
  const classes = useStyles();

  return (
    <Container
      maxWidth="lg"
      className={clsx(props.classes.container, classes.container)}
    >
      <MapContainer />;
    </Container>
  );
};

export default MapPage;
