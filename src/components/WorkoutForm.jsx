// import React, { useState, useEffect } from "react";

// const WorkoutForm = ({ onAddWorkout, setShowForm }) => {
//   const [gender, setGender] = useState("");
//   const [workout, setWorkout] = useState("");
//   const [date, setDate] = useState("");
//   const [duration, setDuration] = useState(0);
//   const [timerActive, setTimerActive] = useState(false);
//   const [startTime, setStartTime] = useState(null);

//   const maleWorkouts = ["Push-ups", "Pull-ups", "Deadlifts", "Running"];
//   const femaleWorkouts = ["Yoga", "Pilates", "Jump Rope", "Squats"];

//   useEffect(() => {
//     let interval;
//     if (timerActive) {
//       setStartTime(Date.now()); // Set start time when timer starts
//       interval = setInterval(() => {
//         setDuration((prevDuration) => prevDuration + 1); // Increase duration every minute
//       },6000); // 6,000ms = a second
//     } else {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval); // Cleanup when unmounting
//   }, [timerActive]);

//   const handleTimer = () => {
//     if (timerActive) {
//       const totalTime = Math.floor((Date.now() - startTime) / 60000); // Convert ms to minutes
//       setDuration(totalTime);
//     }
//     setTimerActive(!timerActive);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!gender || !workout || !date || duration === 0) {
//       alert("Please fill in all fields!");
//       return;
//     }

//     const newWorkout = { gender, workout, date, duration };

//     onAddWorkout(newWorkout);
//     setShowForm(false);
//   };

//   return (
//     <div className="form-container">
//       <h2>Add Workout</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Gender:</label>
//         <select value={gender} onChange={(e) => setGender(e.target.value)}>
//           <option value="">Select Gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>

//         <label>Workout Type:</label>
//         <select value={workout} onChange={(e) => setWorkout(e.target.value)}>
//           <option value="">Select Workout</option>
//           {gender === "male" &&
//             maleWorkouts.map((w, index) => <option key={index}>{w}</option>)}
//           {gender === "female" &&
//             femaleWorkouts.map((w, index) => <option key={index}>{w}</option>)}
//         </select>

//         <label>Date:</label>
//         <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

//         <label>Duration: {duration} min</label>
//         <button type="button" onClick={handleTimer}>
//           {timerActive ? "Stop Timer" : "Start Timer"}
//         </button>

//         <button type="submit">Save Workout</button>
//       </form>
//     </div>
//   );
// };

// export default WorkoutForm;
