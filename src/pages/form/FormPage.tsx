import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import FormContainer from '../../components/form/FormContainer';
import './FormPage.css';

const FormPage: React.FC = (props: any) => {
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
        <FormContainer />
      </IonContent>
    </>
  );
};

export default FormPage;
