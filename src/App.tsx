import Menu from "./components/Menu";
import FormPage from "./pages/form/FormPage";
import MapPage from "./pages/map/MapPage";
import PhotoPage from "./pages/photo/PhotoPage";
import React from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { DatabaseProvider }  from "./components/DatabaseProvider"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* Photo taking capabilities */
import { images, square, triangle } from 'ionicons/icons';

const App: React.FC = () => {
  return (
    <IonApp>
      <DatabaseProvider>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/page/form" component={FormPage} exact />
            <Route path="/page/map" component={MapPage} exact />
            <Route path="/page/photo" component={PhotoPage} exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
      </DatabaseProvider>
    </IonApp>
  );
};

export default App;
