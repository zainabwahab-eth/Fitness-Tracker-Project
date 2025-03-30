// import React, { useState, useEffect } from "react";
// import WorkoutForm from "./components/WorkoutForm";

// const App = () => {
//   const [maleWorkouts, setMaleWorkouts] = useState([]);
//   const [femaleWorkouts, setFemaleWorkouts] = useState([]);

//   // Load saved workouts from localStorage when the app starts
//   useEffect(() => {
//     const savedMaleWorkouts = JSON.parse(localStorage.getItem("maleWorkouts")) || [];
//     const savedFemaleWorkouts = JSON.parse(localStorage.getItem("femaleWorkouts")) || [];
//     setMaleWorkouts(savedMaleWorkouts);
//     setFemaleWorkouts(savedFemaleWorkouts);
//   }, []);

//   // Save workouts to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("maleWorkouts", JSON.stringify(maleWorkouts));
//     localStorage.setItem("femaleWorkouts", JSON.stringify(femaleWorkouts));
//   }, [maleWorkouts, femaleWorkouts]);

//   const addWorkout = (workout) => {
//     if (workout.gender === "male") {
//       setMaleWorkouts([...maleWorkouts, workout]);
//     } else {
//       setFemaleWorkouts([...femaleWorkouts, workout]);
//     }
//   };

//   const deleteWorkout = (gender, index) => {
//     if (gender === "male") {
//       const updatedMaleWorkouts = maleWorkouts.filter((_, i) => i !== index);
//       setMaleWorkouts(updatedMaleWorkouts);
//     } else {
//       const updatedFemaleWorkouts = femaleWorkouts.filter((_, i) => i !== index);
//       setFemaleWorkouts(updatedFemaleWorkouts);
//     }
//   };

//   return (
//     <div>
//       <h1>Fitness Tracker</h1>
//       <WorkoutForm addWorkout={addWorkout} />

//       <h2>Male Workouts</h2>
//       <ul>
//         {maleWorkouts.map((workout, index) => (
//           <li key={index}>
//             {workout.name} - {workout.time} ({workout.duration} mins) - {workout.date}
//             <button onClick={() => deleteWorkout("male", index)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       <h2>Female Workouts</h2>
//       <ul>
//         {femaleWorkouts.map((workout, index) => (
//           <li key={index}>
//             {workout.name} - {workout.time} ({workout.duration} mins) - {workout.date}
//             <button onClick={() => deleteWorkout("female", index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import WorkoutForm from "./components/WorkoutForm";

// const App = () => {
//   const [maleWorkouts, setMaleWorkouts] = useState([]);
//   const [femaleWorkouts, setFemaleWorkouts] = useState([]);

//   // Load saved workouts from localStorage when the app starts
//   useEffect(() => {
//     const savedMaleWorkouts = JSON.parse(localStorage.getItem("maleWorkouts")) || [];
//     const savedFemaleWorkouts = JSON.parse(localStorage.getItem("femaleWorkouts")) || [];
//     setMaleWorkouts(savedMaleWorkouts);
//     setFemaleWorkouts(savedFemaleWorkouts);
//   }, []);

//   const addWorkout = (workout) => {
//     if (workout.gender === "male") {
//       setMaleWorkouts((prev) => {
//         const updated = [...prev, workout];
//         localStorage.setItem("maleWorkouts", JSON.stringify(updated)); // Save immediately
//         return updated;
//       });
//     } else {
//       setFemaleWorkouts((prev) => {
//         const updated = [...prev, workout];
//         localStorage.setItem("femaleWorkouts", JSON.stringify(updated));
//         return updated;
//       });
//     }
//   };

//   const deleteWorkout = (gender, index) => {
//     if (gender === "male") {
//       setMaleWorkouts((prev) => {
//         const updated = prev.filter((_, i) => i !== index);
//         localStorage.setItem("maleWorkouts", JSON.stringify(updated));
//         return updated;
//       });
//     } else {
//       setFemaleWorkouts((prev) => {
//         const updated = prev.filter((_, i) => i !== index);
//         localStorage.setItem("femaleWorkouts", JSON.stringify(updated));
//         return updated;
//       });
//     }
//   };

//   return (
//     <div>
//       <h1>Fitness Tracker</h1>
//       <WorkoutForm addWorkout={addWorkout} />

//       <h2>Male Workouts</h2>
//       <ul>
//         {maleWorkouts.map((workout, index) => (
//           <li key={index}>
//             {workout.name} - {workout.duration} mins - {workout.date}
//             <button onClick={() => deleteWorkout("male", index)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       <h2>Female Workouts</h2>
//       <ul>
//         {femaleWorkouts.map((workout, index) => (
//           <li key={index}>
//             {workout.name} - {workout.duration} mins - {workout.date}
//             <button onClick={() => deleteWorkout("female", index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;




import React, { useState, useEffect } from "react";
import WorkoutForm from "./components/WorkoutForm";
import "./styles/style.css";


const App = () => {
  const [maleWorkouts, setMaleWorkouts] = useState([]);
  const [femaleWorkouts, setFemaleWorkouts] = useState([]);

  useEffect(() => {
    setMaleWorkouts(JSON.parse(localStorage.getItem("maleWorkouts")) || []);
    setFemaleWorkouts(JSON.parse(localStorage.getItem("femaleWorkouts")) || []);
  }, []);

  const addWorkout = (workout) => {
    if (workout.gender === "male") {
      setMaleWorkouts((prev) => {
        const updated = [...prev, workout];
        localStorage.setItem("maleWorkouts", JSON.stringify(updated));
        return updated;
      });
    } else {
      setFemaleWorkouts((prev) => {
        const updated = [...prev, workout];
        localStorage.setItem("femaleWorkouts", JSON.stringify(updated));
        return updated;
      });
    }
  };

  const deleteWorkout = (gender, index) => {
    if (gender === "male") {
      setMaleWorkouts((prev) => {
        const updated = prev.filter((_, i) => i !== index);
        localStorage.setItem("maleWorkouts", JSON.stringify(updated));
        return updated;
      });
    } else {
      setFemaleWorkouts((prev) => {
        const updated = prev.filter((_, i) => i !== index);
        localStorage.setItem("femaleWorkouts", JSON.stringify(updated));
        return updated;
      });
    }
  };

  return (
    <div className="container">
      <h1>Fitness Tracker</h1>
      <WorkoutForm addWorkout={addWorkout} />

      <div className="workout-section">
        <h2>Male Workouts</h2>
        <ul>
          {maleWorkouts.map((workout, index) => (
            <li key={index}>
              {workout.name} - {workout.duration} mins - {workout.date}
              <button onClick={() => deleteWorkout("male", index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="workout-section">
        <h2>Female Workouts</h2>
        <ul>
          {femaleWorkouts.map((workout, index) => (
            <li key={index}>
              {workout.name} - {workout.duration} mins - {workout.date}
              <button onClick={() => deleteWorkout("female", index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;