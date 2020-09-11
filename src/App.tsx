import React from "react";
import { DatabaseProvider }  from "./components/DatabaseProvider"
import { AuthStateContext, IAuthState } from "./contexts/authStateContext";
import { CircularProgress } from "@material-ui/core";
import AppRouter from "./AppRouter";

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
    <AuthStateContext.Consumer>
      {(context: IAuthState) => {
        if (!context.ready) {
          console.log("Auth context not ready");
          return <CircularProgress />;
        }

        return (
        <DatabaseProvider>
        <AppRouter />;
        </DatabaseProvider>
        )}}
    </AuthStateContext.Consumer>
  );
};

export default App;
