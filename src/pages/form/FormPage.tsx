import { Container } from "@material-ui/core";
import React from "react";
import FormContainer from "../../components/form/FormContainer";
import "./FormPage.css";

// react json schema form related:
const schema = {
  type: "object",
  properties: {
    activityType: {
      type: "string",
      title: "Activity Type",
    },
    activityTypeData: {
      type: "object",
      title: "Activity Type Data",
    },
    activitySubType: {
      type: "string",
      title: "Activity Sub-Type",
    },
    activitySubTypeData: {
      type: "object",
      title: "Activity Sub-Type Data",
    },
    date: {
      type: "string",
      title: "Date",
      description: "Date in YYYY-MM-DD format",
    },
    locationAndGeometry: {
      type: "object",
      additionalProperties: false,
      description: "Location and geometry information",
      title: "Location and Geometry",
      properties: {
        anchorPointY: {
          type: "number",
          title: "Anchor Point Y",
        },
        anchorPointX: {
          type: "number",
          title: "Anchor Point X",
        },
        area: {
          type: "number",
          title: "Area",
        },
        jurisdiction: {
          type: "string",
          title: "Jurisdiction",
        },
        agency: {
          type: "string",
          title: "Agency",
        },
        observer1FirstName: {
          type: "string",
          title: "First Name",
        },
        observer1LastName: {
          type: "string",
          title: "Last Name",
        },
        locationComment: {
          type: "string",
          title: "Location Comment",
        },
        generalComment: {
          type: "string",
          title: "General Comment",
        },
        photoTaken: {
          type: "boolean",
          title: "Photo Taken",
        },
      },
    },
  },
};

const uiSchema = {
  activityType: {
    "ui:autofocus": true,
  },
  activityTypeData: {
    "ui:autofocus": true,
    "ui:widget": "textarea",
  },
  activitySubType: {
    "ui:autofocus": true,
  },
  activitySubTypeData: {
    "ui:autofocus": true,
  },
  date: {
    "ui:autofocus": true,
    "ui:widget": "hidden",
  },
  locationAndGeometry: {
    anchorPointY: {
      "ui:autofocus": true,
    },
    anchorPointX: {
      "ui:autofocus": true,
    },
    area: {
      "ui:autofocus": true,
    },
    jurisdiction: {
      "ui:autofocus": true,
    },
    agency: {
      "ui:autofocus": true,
    },
    observer1FirstName: {
      "ui:autofocus": true,
    },
    observer1LastName: {
      "ui:autofocus": true,
    },
    locationComment: {
      "ui:autofocus": true,
    },
    generalComment: {
      "ui:autofocus": true,
    },
    photoTaken: {
      "ui:autofocus": true,
      "ui:widget": "radio",
    },
  },
};





const FormPage: React.FC = (props: any) => {
  return (
    <Container maxWidth="lg" className={props.classes.container}>
      <FormContainer schema={schema} uiSchema={uiSchema}/>
    </Container>
  );
};

export default FormPage;
