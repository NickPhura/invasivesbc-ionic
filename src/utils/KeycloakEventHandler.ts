import { KeycloakEventHandler } from '@react-keycloak/web';
import { KeycloakInstance } from 'keycloak-js';

export const JWT_TOKEN_KEY = 'jwtToken';

const getKeycloakEventHandler = (keycloak: KeycloakInstance) => {
  const keycloakEventHandler: KeycloakEventHandler = (event, error) => {
    if (event === 'onAuthSuccess') {
      console.log('keycloak onAuthSuccess', event);
      console.log('token', keycloak.token);
      // localStorage.setItem(JWT_TOKEN_KEY, keycloak.token!);
    } else if (event === 'onAuthRefreshSuccess') {
      console.log('keycloak onAuthRefreshSuccess', event);
      // localStorage.setItem(JWT_TOKEN_KEY, keycloak.token!);
    } else if (event === 'onAuthLogout') {
      console.log('keycloak onAuthLogout', event);
      // localStorage.clear();
    } else {
      console.debug(`keycloak event: ${event} error ${error}`);
    }
  };
  return keycloakEventHandler;
};

export default getKeycloakEventHandler;
