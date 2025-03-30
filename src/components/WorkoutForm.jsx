// import React, { useState } from "react";

// const maleWorkouts = [
//       "Bench Press", "Deadlifts", "Pull-ups", "Bicep Curls", "Shoulder Press",
//       "Squats", "Running", "Boxing", "HIIT", "Kettlebell Swings"
//     ];
    
//     const femaleWorkouts = [
//       "Squats", "Lunges", "Yoga", "Pilates", "Stretching",
//       "Jump Rope", "Stair Climbing", "Cycling", "Swimming", "HIIT"
//     ];

// const WorkoutForm = ({ addWorkout }) => {
//   const [workout, setWorkout] = useState({
//     name: "",
//     duration: 0,
//     date: "",
//     gender: "male",
//   });

//   const [isTracking, setIsTracking] = useState(false);
//   const [startTime, setStartTime] = useState(null);

//   const handleChange = (e) => {
//     setWorkout({ ...workout, [e.target.name]: e.target.value });
//   };

//   const startWorkout = () => {
//     setStartTime(Date.now());
//     setIsTracking(true);
//   };

//   const stopWorkout = () => {
//     if (startTime) {
//       const durationInMinutes = Math.round((Date.now() - startTime) / 60000);
//       setWorkout({ ...workout, duration: durationInMinutes });
//       setIsTracking(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!workout.name || !workout.date) {
//       alert("Please fill in all fields!");
//       return;
//     }
//     addWorkout(workout);
//     setWorkout({ name: "", duration: 0, date: "", gender: "male" });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="workout-form">
//       <label>Gender:</label>
//       <select name="gender" value={workout.gender} onChange={handleChange}>
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//       </select>

//       <label>Workout Type:</label>
//       <input type="text" name="name" value={workout.name} onChange={handleChange} />

//       <label>Workout Date:</label>
//       <input type="date" name="date" value={workout.date} onChange={handleChange} />

//       <button type="button" onClick={startWorkout} className="start-btn">Start Workout</button>
//       {isTracking && <button type="button" onClick={stopWorkout} className="stop-btn">Stop Workout</button>}

//       <p>Duration: {workout.duration} mins</p>

//       <button type="submit" className="save-btn">Save Workout</button>
//     </form>
//   );
// };

// export default WorkoutForm;





// import React, { useState } from "react";

// const WorkoutForm = ({ addWorkout }) => {
//   const [workout, setWorkout] = useState({
//     name: "",
//     startTime: "",
//     duration: 0,
//     date: "",
//     gender: "male",
//   });

//   const [isTracking, setIsTracking] = useState(false);
//   const [startTime, setStartTime] = useState(null);

//   const maleWorkouts = [
//     "Bench Press", "Deadlifts", "Pull-ups", "Bicep Curls", "Shoulder Press",
//     "Squats", "Running", "Boxing", "HIIT", "Kettlebell Swings"
//   ];

//   const femaleWorkouts = [
//     "Squats", "Lunges", "Yoga", "Pilates", "Stretching",
//     "Jump Rope", "Stair Climbing", "Cycling", "Swimming", "HIIT"
//   ];

//   const handleChange = (e) => {
//     setWorkout({ ...workout, [e.target.name]: e.target.value });
//   };

//   const startWorkout = () => {
//     setStartTime(Date.now());
//     setIsTracking(true);
//   };

//   const stopWorkout = () => {
//     if (startTime) {
//       const durationInMinutes = Math.round((Date.now() - startTime) / 60000);
//       setWorkout({ ...workout, duration: durationInMinutes });
//       setIsTracking(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!workout.name || !workout.date) {
//       alert("Please fill in all fields!");
//       return;
//     }
//     addWorkout(workout);
//     setWorkout({ name: "", startTime: "", duration: 0, date: "", gender: "male" });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="workout-form">
//       <label>Gender:</label>
//       <select name="gender" value={workout.gender} onChange={handleChange}>
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//       </select>

//       <label>Workout Type:</label>
//       <select name="name" value={workout.name} onChange={handleChange}>
//         {workout.gender === "male"
//           ? maleWorkouts.map((exercise, index) => (
//               <option key={index} value={exercise}>{exercise}</option>
//             ))
//           : femaleWorkouts.map((exercise, index) => (
//               <option key={index} value={exercise}>{exercise}</option>
//             ))}
//       </select>

//       <label>Workout Date:</label>
//       <input type="date" name="date" value={workout.date} onChange={handleChange} />

//       <button type="button" onClick={startWorkout}>Start Workout</button>
//       {isTracking && <button type="button" onClick={stopWorkout}>Stop Workout</button>}

//       <p>Duration: {workout.duration} mins</p>

//       <button type="submit">Save Workout</button>
//     </form>
//   );
// };

// export default WorkoutForm;





import React, { useState } from "react";

const WorkoutForm = ({ addWorkout }) => {
  const [workout, setWorkout] = useState({ name: "", duration: 0, date: "", gender: "male" });
  const [isTracking, setIsTracking] = useState(false);
  const [startTime, setStartTime] = useState(null);

  const maleWorkouts = ["Bench Press", "Deadlifts", "Pull-ups", "Squats", "Running"];
  const femaleWorkouts = ["Yoga", "Pilates", "Jump Rope", "Cycling", "Swimming"];

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const startWorkout = () => {
    setStartTime(Date.now());
    setIsTracking(true);
  };

  const stopWorkout = () => {
    if (startTime) {
      const durationInMinutes = Math.round((Date.now() - startTime) / 60000);
      setWorkout((prev) => ({ ...prev, duration: durationInMinutes }));
      setIsTracking(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!workout.name || !workout.date) {
      alert("Please fill in all fields!");
      return;
    }
    addWorkout(workout);
    setWorkout({ name: "", duration: 0, date: "", gender: "male" });
  };

  return (
    <form onSubmit={handleSubmit} className="workout-form">
      <label>Gender:</label>
      <select name="gender" value={workout.gender} onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label>Workout Type:</label>
      <select name="name" value={workout.name} onChange={handleChange}>
        <option value="">Select a workout</option>
        {workout.gender === "male"
          ? maleWorkouts.map((exercise, index) => <option key={index} value={exercise}>{exercise}</option>)
          : femaleWorkouts.map((exercise, index) => <option key={index} value={exercise}>{exercise}</option>)}
      </select>

      <label>Workout Date:</label>
      <input type="date" name="date" value={workout.date} onChange={handleChange} />

      <button type="button" onClick={startWorkout}>Start Workout</button>
      {isTracking && <button type="button" onClick={stopWorkout}>Stop Workout</button>}

      <p>Duration: {workout.duration} mins</p>

      <button type="submit">Save Workout</button>
    </form>
  );
};

export default WorkoutForm;
