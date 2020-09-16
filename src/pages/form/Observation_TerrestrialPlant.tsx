import { Container } from "@material-ui/core";
import React from "react";
import FormContainer from "../../components/form/FormContainer";
import "./FormPage.css";

// react json schema form related:
const schema = {
  "type": "object",
  "Observation": {
    "description": "Observation main object.\n",
    "type": "object",
    "required": [
       "observation_id",
       "workflow_id",
       "observation_date",
       "observation time",
       "observer_first_name",
       "observer_last_name",
       "species_id",
       "observation_type",
       "species_agency_code",
       "jurisdiction_code"
    ],
    "properties": {
       "observation_id": {
          "type": "number",
          "title": "ID"
       },
       "workflow_id": {
          "type": "number",
          "title": "Workflow ID"
       },
       "observation_date": {
          "type": "string",
          "title": "Date"
       },
       "observation_time": {
          "type": "string",
          "title": "Time"
       },
       "observer_first_name": {
          "type": "string",
          "title": "First Name"
       },
       "observer_last_name": {
          "type": "string",
          "title": "Last Name"
       },
       "species_id": {
          "type": "string",
          "title": "Species"
       },
       "observation_type": {
          "type": "string",
          "title": "Type"
       },
       "species_agency_code": {
          "type": "string",
          "title": "Agency"
       },
       "jurisdiction_code": {
          "type": "string",
          "title": "Jurisdiction"
       },
       "negative_obs_ind": {
          "type": "boolean",
          "title": "Negative Observation"
       },
       "subType": {
          "oneOf": [
             {
                "Observation_PlantTerrestial"
             },
             {
                "Observation_AnimalTerrestrial"
             },
             {
                "Observation_AnimalAquatic"
             }
          ]
       }
    }
 },
 "Observation_PlantTerrestial": {
    "description": "Plant Observation Terrestrial\n",
    "type": "object",
    "properties": {
       "species_density_code": {
          "type": "string",
          "title": "Density"
       },
       "species_distribution_code": {
          "type": "string",
          "title": "Distribution"
       },
       "soil_texture_code": {
          "type": "string",
          "title": "Soil Texture"
       },
       "specific_use_code": {
          "type": "string",
          "title": "Specific Use"
       },
       "slope_code": {
          "type": "string",
          "title": "Slope"
       },
       "aspect_code": {
          "type": "string",
          "title": "Aspect"
       },
       "proposed_action_code": {
          "type": "string",
          "title": "Proposed Action"
       },
       "flowering": {
          "type": "boolean",
          "title": "Flowering"
       },
       "plant_life_stage": {
          "type": "string",
          "title": "Life Stage"
       },
       "plant_health": {
          "type": "string",
          "title": "Health"
       },
       "plant_seed_stage": {
          "type": "string",
          "title": "Seed Stage"
       },
       "sample_identifier": {
          "type": "string",
          "title": "Sample ID"
       },
       "range_unit_number": {
          "type": "string",
          "title": "Range Unit"
       },
       "general_comment": {
          "type": "string",
          "title": "Comment",
          "maximum": 300
       },
       "access_description": {
          "type": "string",
          "title": "Access Description"
       },
       "primary_file_id": {
          "type": "string",
          "title": "Primary File"
       },
       "secondary_file_id": {
          "type": "string",
          "title": "Secondary File"
       },
       "sample_taken": {
          "type": "boolean",
          "title": "Sample Taken"
       },
       "sample_number": {
          "type": "string",
          "title": "Sample Number"
       },
       "aquatic_obs_ind": {
          "type": "boolean",
          "title": "Aquatic Observation"
       },
       "legacy_site_ind": {
          "type": "boolean"
       },
       "early_detection_rapid_resp_ind": {
          "type": "boolean",
          "title": "Early Detection"
       },
       "research_detection_ind": {
          "type": "boolean",
          "title": "Research Detection"
       },
       "well_ind": {
          "type": "boolean",
          "title": "Well"
       },
       "special_care_ind": {
          "type": "boolean",
          "title": "Special Care"
       },
       "biological_ind": {
          "type": "boolean",
          "title": "Biological"
       },
       "Photo_Indicator": {
          "type": "boolean",
          "title": "Photo"
       },
       "Bec_Zone": {
          "type": "string",
          "title": "Bec Zone"
       },
       "RISO": {
          "type": "string",
          "title": "RISO"
       },
       "IPMA": {
          "type": "string",
          "title": "IPMA"
       },
       "Ownership": {
          "type": "string",
          "title": "Owned by"
       },
       "Regional_District": {
          "type": "string",
          "title": "Regional District"
       },
       "FLNRO_District": {
          "type": "string",
          "title": "FLNRO District"
       },
       "MOTI_District": {
          "type": "string",
          "title": "MOTI District"
       },
       "MOE_Region": {
          "type": "string",
          "title": "MOE Region"
       }
    }
 },
 "Observation_AnimalTerrestrial": {
    "description": "Animal Observation Terrestrial.\n",
    "type": "object",
    "properties": {
       "Number_of_Individuals_observed": {
          "type": "number",
          "title": "Number of Individuals"
       },
       "Life_Stage": {
          "type": "string",
          "title": "Life Stage"
       },
       "Behaviour": {
          "type": "string",
          "title": "Behaviour"
       },
       "sample_taken": {
          "type": "boolean",
          "title": "Sample Taken"
       },
       "sample_number": {
          "type": "string",
          "title": "Sample Number"
       },
       "general_comment": {
          "type": "string",
          "title": "Comment"
       },
       "access_description": {
          "type": "string",
          "title": "Access Description"
       },
       "photo": {
          "type": "array",
          "title": "Photos",
          "items": {
             "$ref": "#/components/schemas/Photo"
          }
       }
    }
 },
 "Observation_AnimalAquatic": {
    "description": "Animal Observation Aquatic.\n",
    "type": "object",
    "properties": {
       "Number_of_Individuals_observed": {
          "type": "number",
          "title": "Number of Individuals"
       },
       "Life_Stage": {
          "type": "string",
          "title": "Life Stage"
       },
       "Behaviour": {
          "type": "string",
          "title": "Behaviour"
       },
       "sample_taken": {
          "type": "boolean",
          "title": "Sample Taken"
       },
       "sample_number": {
          "type": "string",
          "title": "Sample Number"
       },
       "general_comment": {
          "type": "string",
          "title": "Comment"
       },
       "access_description": {
          "type": "string",
          "title": "Access Description"
       },
       "photo": {
          "type": "array",
          "title": "Photos",
          "items": {
             "$ref": "#/components/schemas/Photo"
          }
       }
    }
  }
}



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





const Observation_TerrestrialPlant: React.FC = (props: any) => {
  return (
    <Container maxWidth="lg" className={props.classes.container}>
      <FormContainer schema={schema} uiSchema={uiSchema}/>
    </Container>
  );
};

export default Observation_TerrestrialPlant;
