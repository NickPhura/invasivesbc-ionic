import React, { useEffect, useState } from "react";
import { useInvasivesApi } from "../../api/api";
import "./AdminContainer.css";

const AdminContainer: React.FC = () => {
  const api = useInvasivesApi();

  const [activityId, setActivityId] = useState(null);
  const [activity, setActivity] = useState(null);

  const getActivity = async () => {
    const activity = await api.getActivityById(activityId);
    setActivity(activity.data);
  };

  return (
    <div>
      <input
        onChange={(event) => {
          setActivityId(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          getActivity();
        }}
      >
        Fetch Activity
      </button>
      <p>{activityId}</p>
      <p>{activity}</p>
    </div>
  );
};

export default AdminContainer;
