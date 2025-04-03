import React, { useState, useEffect } from "react";
import "./overlay.css";
import { useDispatch } from "react-redux";
import { addEntry } from "./redux/fitnessSlice";

function FormOverlay({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [gender, setGender] = useState("");
  const [workout, setWorkout] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [startTime, setStartTime] = useState(null);

  const dispatch = useDispatch();

  const maleWorkouts = ["Push-ups", "Pull-ups", "Deadlifts", "Running"];
  const femaleWorkouts = ["Yoga", "Pilates", "Jump Rope", "Squats"];

  useEffect(() => {
    let interval;
    if (timerActive) {
      setStartTime(Date.now());
      interval = setInterval(() => {
        setDuration((prevDuration) => prevDuration + 1);
      }, 60000); // 60,000ms = 1 minute
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  const handleTimer = () => {
    if (timerActive) {
      const totalTime = Math.floor((Date.now() - startTime) / 60000);
      setDuration(totalTime);
    }
    setTimerActive(!timerActive);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!gender || !workout || !date || duration === 0) {
      alert("Please fill in all fields!");
      return;
    }

    dispatch(addEntry({ id: Date.now(), gender, workout, date, duration }));
    setGender("");
    setWorkout("");
    setDate("");
    setDuration(0);
    onClose();
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>x</button>
        <h2>Add Workout</h2>
        <form onSubmit={handleSubmit}>
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label>Workout Type:</label>
          <select value={workout} onChange={(e) => setWorkout(e.target.value)}>
            <option value="">Select Workout</option>
            {gender === "male" && maleWorkouts.map((w, index) => <option key={index}>{w}</option>)}
            {gender === "female" && femaleWorkouts.map((w, index) => <option key={index}>{w}</option>)}
          </select>

          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

          <label>Duration: {duration} min</label>
          <button type="button" onClick={handleTimer}>
            {timerActive ? "Stop Timer" : "Start Timer"}
          </button>

          <button type="submit">Save Workout</button>
        </form>
      </div>
    </div>
  );
}

export default FormOverlay;

 // import React, { useState } from "react";
// import "./overlay.css";
// import { useDispatch, useSelector } from "react-redux";
// import { addEntry } from "./redux/fitnessSlice";

// function FormOverlay({ isOpen, onClose }) {
//   if (!isOpen) return null;

//   const [activity, setActivity] = useState({
//     type: "",
//     duration: "",
//     date: "",
//   });

//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     setActivity({ ...activity, [e.target.name]: e.target.value });
//   };

//   const handleAddEntry = () => {
//     if (activity.type && activity.duration && activity.date) {
//       dispatch(addEntry({ id: Date.now(), ...activity }));
//       setActivity({ type: "", duration: "", date: "" });
//       onClose();
//     }
//   };

//   return (
//     <div className="overlay" onClick={onClose}>
//       <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
//         <button className="close-btn" onClick={onClose}>
//           x
//         </button>
//         <h2>Add Overlay</h2>
//         <select
//           className="type-select"
//           name="type"
//           value={activity.type}
//           onChange={handleChange}
//         >
//           <option value="">Select Type</option>
//           <option value="Run">Run</option>
//           <option value="Lift">Lift</option>
//         </select>

//         <input
//           className="duration"
//           type="number"
//           name="duration"
//           placeholder="Duration (minutes)"
//           value={activity.duration}
//           onChange={handleChange}
//         />

//         <input
//           className="date"
//           type="date"
//           name="date"
//           value={activity.date}
//           onChange={handleChange}
//         />

//         <button className="pri-button" onClick={handleAddEntry}>
//           Add Activity
//         </button>
//       </div>
//     </div>
//   );
// }

// export default FormOverlay;
