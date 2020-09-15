import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { KeycloakProvider } from "@react-keycloak/web";
import Keycloak, {
  KeycloakConfig,
  KeycloakInitOptions,
  KeycloakInstance,
} from "keycloak-js";
import React from "react";
import App from "./App";
import { AuthStateContextProvider } from "./contexts/authStateContext";
import getKeycloakEventHandler from "./utils/KeycloakEventHandler";
import { CircularProgress } from "@material-ui/core";

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
import { DeviceInfo } from "@capacitor/core";

const IonicApp: React.FC = (props: { children?: null; info?: DeviceInfo }) => {
  const keycloakConfig: KeycloakConfig = {
    realm: "dfmlcg7z",
    url: "https://sso-dev.pathfinder.gov.bc.ca/auth/",
    clientId: "invasives-bc",
  };

  //@ts-ignore
  const keycloak: KeycloakInstance = new Keycloak(keycloakConfig);

  let initConfig = null;

  if (window["cordova"]) {
    initConfig = {
      ...initConfig,
      ...{
        flow: "hybrid",
        redirectUri: "http://127.0.0.1",
        checkLoginIframe: false,
        onLoad: "login-required",
      },
    };
  } else {
    initConfig = { onLoad: "login-required" };
  }

  return (
    <IonApp>
      <KeycloakProvider
        keycloak={keycloak}
        initConfig={initConfig}
        LoadingComponent={<CircularProgress />}
        onEvent={() => getKeycloakEventHandler(keycloak)}
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
