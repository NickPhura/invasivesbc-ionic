import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from '@rjsf/core';
import { JSONSchema7 } from "json-schema";
import './ExploreContainer.css';

// db caching related:
import * as RxDB from 'rxdb';

// react json schema form related:
const schema = {
    "type": "object",
    "required": [
        "activityType",
        "activityTypeData",
        "activitySubType",
        "activitySubTypeData",
        "locationAndGeometry"
    ],
    "properties": {
        "activityType": {
            "type": "string",
            "title": "Activity Type"
        },
        "activityTypeData": {
            "type": "object",
            "title": "Activity Type Data"
        },
        "activitySubType": {
            "type": "string",
            "title": "Activity Sub-Type"
        },
        "activitySubTypeData": {
            "type": "object",
            "title": "Activity Sub-Type Data"
        },
        "date": {
            "type": "string",
            "title": "Date",
            "description": "Date in YYYY-MM-DD format"
        },
        "locationAndGeometry": {
            "type": "object",
            "additionalProperties": false,
            "description": "Location and geometry information",
            "title": "Location and Geometry",
            "properties": {
                "anchorPointY": {
                    "type": "number",
                    "title": "Anchor Point Y"
                },
                "anchorPointX": {
                    "type": "number",
                    "title": "Anchor Point X"
                },
                "area": {
                    "type": "number",
                    "title": "Area"
                },
                "jurisdiction": {
                    "type": "string",
                    "title": "Jurisdiction"
                },
                "agency": {
                    "type": "string",
                    "title": "Agency"
                },
                "observer1FirstName": {
                    "type": "string",
                    "title": "First Name"
                },
                "observer1LastName": {
                    "type": "string",
                    "title": "Last Name"
                },
                "locationComment": {
                    "type": "string",
                    "title": "Location Comment"
                },
                "generalComment": {
                    "type": "string",
                    "title": "General Comment"
                },
                "photoTaken": {
                    "type": "boolean",
                    "title": "Photo Taken"
                }
            }
        }
    }
};

const uiSchema = {
    "activityType": {
        "ui:autofocus": true
    },
    "activityTypeData": {
        "ui:autofocus": true,
        "ui:widget": "textarea"
    },
    "activitySubType": {
        "ui:autofocus": true
    },
    "activitySubTypeData": {
        "ui:autofocus": true
    },
    "date": {
        "ui:autofocus": true,
        "ui:widget": "hidden"
    },
    "locationAndGeometry": {
        "anchorPointY": {
            "ui:autofocus": true
        },
        "anchorPointX": {
            "ui:autofocus": true
        },
        "area": {
            "ui:autofocus": true
        },
        "jurisdiction": {
            "ui:autofocus": true
        },
        "agency": {
            "ui:autofocus": true
        },
        "observer1FirstName": {
            "ui:autofocus": true
        },
        "observer1LastName": {
            "ui:autofocus": true
        },
        "locationComment": {
            "ui:autofocus": true
        },
        "generalComment": {
            "ui:autofocus": true
        },
        "photoTaken": {
            "ui:autofocus": true,
            "ui:widget": "radio"
        }
    }
};

class ExploreContainer extends Component {
    name: string = '';
    rxjsCollection: RxDB.RxCollection;

    constructor(props) {
        super(props);

        this.name = props.name;
    }

    async componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener('nv-focus', () => await this.createDB());
    }

    createDB = async () => {
        console.log('inti');

        RxDB.addRxPlugin(require('pouchdb-adapter-cordova-sqlite'));

        console.log('inti 2');

        const db = await RxDB.createRxDatabase({
            name: 'mydatabase',
            adapter: 'cordova-sqlite', // the name of your adapter
            ignoreDuplicate: true
        });

        console.log('adapter', db);

        const collection = await db.collection({ name: "activities", schema: { ...schema, version: 0 } })

        this.rxjsCollection = collection;
        console.log('db created');
    };

    submitEventHandler = async (event) => {
        console.log(event);
        const result = await this.rxjsCollection.insert(event.formData);
        console.log(result);
    };

    render = () => {
        return (
            <Form schema={schema as JSONSchema7} uiSchema={uiSchema} onSubmit={this.submitEventHandler} />
        );
    };
}

export default ExploreContainer;
