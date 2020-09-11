import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AdminContainer from '../../components/admin/AdminContainer';
import './AdminPage.css';

const AdminPage: React.FC = (props: any) => {
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
        <AdminContainer />
      </IonContent>
    </>
  );
};

export default AdminPage;
