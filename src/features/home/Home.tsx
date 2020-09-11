import SideMenu from "../../components/Menu";
import FormPage from "../../pages/form/FormPage";
import MapPage from "../../pages/map/MapPage";
import PhotoPage from "../../pages/photo/PhotoPage";
import AdminPage from "../../pages/admin/AdminPage";
import "./Home.scss";
import React from "react";
import { Grid } from "@material-ui/core";
import { Route } from "react-router-dom";

const Home: React.FC = () => {
  return (
      <Grid container className="App-home">
        <Grid item lg={3} md={3} sm={4} xs={4}>
          <SideMenu />
        </Grid>
        <Grid item lg={9} md={9} sm={8} xs={8}>
          <Route
            path="/home/form"
            render={(props: any) => <FormPage {...props} name="Form" />}
            exact
          />
          <Route
            path="/home/map"
            render={(props: any) => <MapPage {...props} name="Map" />}
            exact
          />
          <Route
            path="/home/photo"
            render={(props: any) => <PhotoPage {...props} name="Photos" />}
            exact
          />
          <Route
            path="/home/admin"
            render={(props: any) => <AdminPage {...props} name="Admin" />}
            exact
          />
        </Grid>
      </Grid>
  );
};

export default Home;
