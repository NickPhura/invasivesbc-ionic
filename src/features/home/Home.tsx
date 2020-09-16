import FormPage from "../../pages/form/FormPage";
import Observation from "../../pages/form/Observation";
import Monitoring from "../../pages/form/Monitoring";
import Treatment from "../../pages/form/Treatment";
import MapPage from "../../pages/map/MapPage";
import PhotoPage from "../../pages/photo/PhotoPage";
import AdminPage from "../../pages/admin/AdminPage";
import "./Home.scss";
import React from "react";
import { Route } from "react-router-dom";

export interface IHome {
  classes: any;
}

const Home: React.FC<IHome> = (props: { classes?: any }) => {
  return (
    <>
      {/* <Route
        path="/home/form"
        render={(routerProps: any) => (
          <FormPage {...routerProps} {...props} name="Form" />
        )}
        exact
      /> */}

      <Route
        path="/home/observation"
        render={(routerProps: any) => (
          <Observation {...routerProps} {...props} name="Observation" />
        )}
        exact
      />
      <Route
        path="/home/treatment"
        render={(routerProps: any) => (
          <Treatment {...routerProps} {...props} name="Treatment" />
        )}
        exact
      />
      <Route
        path="/home/monitoring"
        render={(routerProps: any) => (
          <Monitoring {...routerProps} {...props} name="Monitoring" />
        )}
        exact
      />
      <Route
        path="/home/map"
        render={(routerProps: any) => (
          <MapPage {...routerProps} {...props} name="Map" />
        )}
        exact
      />
      <Route
        path="/home/photo"
        render={(routerProps: any) => (
          <PhotoPage {...routerProps} {...props} name="Photos" />
        )}
        exact
      />
      <Route
        path="/home/admin"
        render={(routerProps: any) => (
          <AdminPage {...routerProps} {...props} name="Admin" />
        )}
        exact
      />
    </>
  );
};

export default Home;
