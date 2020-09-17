import Observation from '../../pages/form/Observation';
import Monitoring from '../../pages/form/Monitoring';
import Treatment from '../../pages/form/Treatment';
import MapPage from '../../pages/map/MapPage';
import PhotoPage from '../../pages/photo/PhotoPage';
import React from 'react';
import { Route } from 'react-router-dom';

interface IHomeProps {
  classes: any;
}

const Home: React.FC<IHomeProps> = (props) => {
  return (
    <>
      <Route
        path="/home/observation"
        render={(routerProps: any) => <Observation {...routerProps} {...props} name="Observation" />}
        exact
      />
      <Route
        path="/home/treatment"
        render={(routerProps: any) => <Treatment {...routerProps} {...props} name="Treatment" />}
        exact
      />
      <Route
        path="/home/monitoring"
        render={(routerProps: any) => <Monitoring {...routerProps} {...props} name="Monitoring" />}
        exact
      />
      <Route path="/home/map" render={(routerProps: any) => <MapPage {...routerProps} {...props} name="Map" />} exact />
      <Route
        path="/home/photo"
        render={(routerProps: any) => <PhotoPage {...routerProps} {...props} name="Photos" />}
        exact
      />
    </>
  );
};

export default Home;
