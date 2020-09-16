import { Container } from "@material-ui/core";
import React from "react";
import FormContainer from "../../components/form/FormContainer";
import "./FormPage.css";

const FormPage: React.FC = (props: any) => {
  return (
    <Container maxWidth="lg" className={props.classes.container}>
      <FormContainer />
    </Container>
  );
};

export default FormPage;
