import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { KeycloakProvider } from "@react-keycloak/web";
import Keycloak, { KeycloakConfig, KeycloakInstance } from "keycloak-js";
import React from "react";
import App from "./App";
import { AuthStateContextProvider } from "./contexts/authStateContext";
import getKeycloakEventHandler from "./utils/KeycloakEventHandler";

/* Theme variables */
import "./theme/variables.css";

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
import { CircularProgress } from "@material-ui/core";

const keycloakConfig: KeycloakConfig = {
  realm: "dfmlcg7z",
  url: "https://sso-dev.pathfinder.gov.bc.ca/auth/",
  clientId: "invasives-bc",
};

//@ts-ignore
const keycloak: KeycloakInstance = new Keycloak(keycloakConfig);

const IonicApp: React.FC = () => {
  return (
    <IonApp>
      <KeycloakProvider
        keycloak={keycloak}
        LoadingComponent={<CircularProgress />}
        onEvent={getKeycloakEventHandler(keycloak)}
      >
        <AuthStateContextProvider>
          <IonReactRouter>
            <App />
          </IonReactRouter>
        </AuthStateContextProvider>
      </KeycloakProvider>
    </IonApp>
  );
};

export default IonicApp;
