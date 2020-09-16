import React, { Component } from "react";
import "./PhotoContainer.css";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonFabList } from '@ionic/react';
import { camera, trash, close } from 'ionicons/icons';
import {
  IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
  IonCol, IonImg, IonActionSheet
} from '@ionic/react';
import { usePhotoGallery } from '../../hooks/usePhotoGallery';
import { attachProps } from '@ionic/react/dist/types/components/utils';

const PhotoContainer: React.FC = (props: any) => {

  const { photos, takePhoto, deletePhotos } = usePhotoGallery();

  return (
    <div>
      <p>Placeholder if needed</p>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg src={photo.base64 ?? photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="center">
          <IonRow>
            <IonCol>
              <IonFabButton onClick={() => takePhoto()}>
                <IonIcon icon={camera}></IonIcon>
              </IonFabButton>

            </IonCol>
            <IonCol>
              <IonFabButton onClick={() => deletePhotos()}>
                <IonIcon icon={trash}></IonIcon>
              </IonFabButton>
            </IonCol>
          </IonRow>
        </IonFab>
      </IonContent>
    </div>
  );
};

export default PhotoContainer;
