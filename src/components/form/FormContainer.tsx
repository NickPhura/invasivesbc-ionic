import React, { Dispatch } from "react";
import Form from "@rjsf/material-ui";
import { JSONSchema7 } from "json-schema";
import "./FormContainer.css";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { useState, useEffect, useContext } from "react";

// db caching related:
import * as RxDB from "rxdb";
import { DatabaseContext } from "../../contexts/DatabaseContext";
import { useInvasivesApi } from "../../api/api";


/*
interface IFormControlProps {
  database: RxDB.RxDatabase;
  setFormData: Function;
  schema?: any;
  uiSchema?: any;
}*/

// Form controls:
const FormControls: React.FC<any> = (
  props: any

) => {
  const api = useInvasivesApi();

  // needed for fetch:
  const [activityID, setActivityID] = useState("");

  // just for fun (first half):
  const [isValidActivityID, setIsValidActivityID] = useState(true);

  useEffect(() => {
    var activityIDAsNumber = +activityID;
    activityIDAsNumber >= 0
      ? setIsValidActivityID(true)
      : setIsValidActivityID(false);
  }, [activityID]);

  const sync = async (formData: any) => {
    const response = await api.createActivity(formData);
  };

  const read = async (event: any) => {
    const response = await api.getActivityById(activityID);
    console.log(response.data);
    props.setFormData(response.data);
  };

  const save = async (formData: any) => {
    // props.database.insert(formData);
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Activity ID To Fetch"
        variant="outlined"
        // other half of fun:
        error={!isValidActivityID}
        onChange={(e) => setActivityID(e.target.value)}
        helperText="It's gotta be a number."
      />

      <br></br>
      <Grid container spacing={3}>
        <Grid container item spacing={3}>
          <Grid item>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={sync}
            >
              Sync Record
            </Button>
          </Grid>
          <Grid item>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={read}
            >
              Get Record
            </Button>
          </Grid>
          <Grid item>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={save}
            >
              Local Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const FormContainer: React.FC<any> = (props: any) => {
  const database = useContext(DatabaseContext);

  const [collection, setCollection] = useState(null);

  const [formData, setFormData] = useState({ activityType: "LAME" });

  const setupCollection = async () => {
    if (!database) {
      // database not yet set up
      return;
    }

    if (database.activities) {
      // collection already exists
      return;
    }

    const table = await database.collection({
      name: "activities",
      schema: { ...props.schema, version: 0 },
    });

    setCollection(table);
  };

  const submitEventHandler = async (event: any) => {
    // await collection.insert(event.formData);
    // const results = await collection.find().exec();
    // results.map((item) => console.log(item.toJSON()));
  };

  useEffect(() => {
    setupCollection();
  }, [database]);

  return (
    <div>
      <FormControls database={database} setFormData={setFormData} />

      <Form
        formData={formData}
        schema={props.schema as JSONSchema7}
        uiSchema={props.uiSchema}
        onSubmit={submitEventHandler}
      />
    </div>
  );
};

export default FormContainer;
