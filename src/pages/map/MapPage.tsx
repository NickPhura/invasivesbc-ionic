import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import MapContainer from '../../components/map/MapContainer';
import './MapPage.css';

const MapPage: React.FC = (props: any) => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{props.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen> 
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{props.name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MapContainer />
      </IonContent>
    </>
  );
};

export default MapPage;
