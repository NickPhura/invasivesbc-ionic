import SideMenu from "../../components/Menu";
import FormPage from "../../pages/form/FormPage";
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
      <Route
        path="/home/form"
        render={(routerProps: any) => (
          <FormPage {...routerProps} {...props} name="Form" />
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
