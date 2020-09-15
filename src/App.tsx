import React from "react";
import { DatabaseContextProvider } from "./contexts/DatabaseContext";
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

const App: React.FC = () => {
  return (
    <DatabaseContextProvider>
      <AuthStateContext.Consumer>
        {(context: IAuthState) => {
          if (!context.ready) {
            return <CircularProgress />;
          }

          return <AppRouter />;
        }}
      </AuthStateContext.Consumer>
    </DatabaseContextProvider>
  );
};

export default App;
