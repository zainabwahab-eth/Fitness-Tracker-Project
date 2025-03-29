import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEntry } from "./redux/fitnessSlice";

function FormOverlay({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activity, setActivity] = useState({
    type: "",
    duration: "",
    date: "",
  });

  const dispatch = useDispatch();
  // const entries = useSelector((state) => state.fitness.entries);

  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleAddEntry = () => {
    if (activity.type && activity.duration && activity.date) {
      dispatch(addEntry({ id: Date.now(), ...activity }));
      setActivity({ type: "", duration: "", date: "" });
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          x
        </button>
        <h2>Add Overlay</h2>
        <select
          className="type-select"
          name="type"
          value={activity.type}
          onChange={handleChange}
        >
          <option value="">Select Type</option>
          <option value="Run">Run</option>
          <option value="Lift">Lift</option>
          {/* <option value="Yoga">Yoga</option> */}
        </select>

        <input
          className="duration"
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          value={activity.duration}
          onChange={handleChange}
        />

        <input
          className="date"
          // placeholder="Duration (minutes)"
          type="date"
          name="date"
          value={activity.date}
          onChange={handleChange}
        />

        <button className="pri-button" onClick={handleAddEntry}>
          Add Activity
        </button>
      </div>
    </div>
  );
}

export default FormOverlay;
