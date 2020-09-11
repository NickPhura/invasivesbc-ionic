import React, { Component } from "react";
import Form from "@rjsf/material-ui";
import { JSONSchema7 } from "json-schema";
import "./FormContainer.css";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Add from '@material-ui/icons'
import { useState, useEffect, useContext} from 'react'
import { IonInput } from "@ionic/react";


// db caching related:
import * as RxDB from "rxdb";
import { DatabaseContext } from "../DatabaseProvider";

console.log('compile')

// react json schema form related:
const schema = {
  type: "object",
  required: [
    "activityType",
    "activityTypeData",
    "activitySubType",
    "activitySubTypeData",
    "locationAndGeometry",
  ],
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



// Form controls:
function FormControls() {

  // needed for fetch:
  const [activityID, setActivityID] = useState('')

  // just for fun (first half):
  const [isValidActivityID, setIsValidActivityID] = useState(true)
  
  
  const validateActivityID = useEffect(() => {
      var activityIDAsNumber = +activityID
      activityIDAsNumber >= 0? setIsValidActivityID(true) : setIsValidActivityID(false)}
      ,[activityID])


  
  const sync = () => {
    console.log('code to sync goes here')
  }

  const read = () => {
    console.log('code to read a record goes here')
  }

  const save = () => {
    console.log('code to save a record goes here')
  }

    return (   
        <>    
          
          <TextField  id="outlined-basic" 
                      label="Activity ID To Fetch" 
                      variant="outlined"
          
                      // other half of fun:
                      error={!isValidActivityID}
                      onChange={e=> setActivityID(e.target.value)}
                      helperText="It's gotta be a number."
                       />

          
                       <br></br>
          <Grid container spacing={3}>
              <Grid container item spacing={3}>
                <Grid item >
                  <Button size="small" variant="contained" color="primary" onClick={sync}>Sync Record</Button>
                </Grid>
              <Grid item >
                <Button size="small" variant="contained" color="primary" onClick={read}>Get Record</Button>  
              </Grid>
                <Grid item >
                  <Button size="small" variant="contained" color="primary" onClick={save}>Local Save</Button>
                </Grid>
              </Grid>
          </Grid>
      

        </>
    );
}


//TODO: move db to external provider and make form a functional component
const FormContainer: React.FC = () => {
  let rxjsCollection: RxDB.RxCollection;
  const database = useContext(DatabaseContext)
  useEffect(() => setupTable, [])

  async function setupTable() {

    console.log(database)
    const collection = await database.collection({
      name: "activities",
      schema: { ...schema, version: 0 },

    });

    rxjsCollection = collection;
  };

  const submitEventHandler = async (event: any) => {
    await rxjsCollection.insert(event.formData);
    
    const results = await rxjsCollection.find().exec();
    results.map((item) => console.log(item.toJSON()));
  };

    return (
      <div>
        <p>FORM!</p>
        <FormControls/>

        <Form
          schema={schema as JSONSchema7}
          uiSchema={uiSchema}
          onSubmit={submitEventHandler}
        />
      </div>
    );
  };


export default FormContainer;
