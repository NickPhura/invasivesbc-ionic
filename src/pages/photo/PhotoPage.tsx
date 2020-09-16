import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonFabList } from '@ionic/react';
import React from 'react';
import PhotoContainer from '../../components/photo/PhotoContainer';
import './PhotoPage.css';

const PhotoPage: React.FC = (props: any) => {
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
        <PhotoContainer />
      </IonContent>
    </>
  );
};

export default PhotoPage;
