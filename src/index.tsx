import { default as React } from 'react';
import ReactDOM from 'react-dom';
import IonicApp from './Ionic-App';
import * as serviceWorker from './serviceWorker';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);

const startApp = () => {
  ReactDOM.render(<IonicApp />, document.getElementById('root'));

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
};

if (window['cordova']) {
  // start app on mobile
  // must wait for 'deviceready' before starting
  document.addEventListener('deviceready', startApp, false);
} else {
  // start app on web
  startApp();
}
