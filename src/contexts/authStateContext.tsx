import * as React from "react";
import useKeycloakWrapper from "../hooks/useKeycloakWrapper";

export interface IAuthState {
  ready?: boolean;
}

export const AuthStateContext = React.createContext<IAuthState>({
  ready: false,
});

export const AuthStateContextProvider = (props: { children?: any }) => {
  const keycloak = useKeycloakWrapper();
  const [userInfo, setUserInfo] = React.useState<any>(null);

  React.useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const user = await keycloak.obj?.loadUserInfo();
        console.log("loadUserInfo", user);
        setUserInfo(user);
      } catch (error) {
        console.log("loadUserInfo error", error);
      }
    };

    loadUserInfo();
  }, [keycloak.obj]);

  return (
    <AuthStateContext.Provider
      value={{
        // if user info is not available when authenticated, then the auth state is not ready
        ready:
          !keycloak.obj?.authenticated ||
          (keycloak.obj?.authenticated && !!userInfo),
      }}
    >
      {props.children}
    </AuthStateContext.Provider>
  );
};
