// import React, { useEffect, useState } from "react";

// const WorkoutList = () => {
//   const [workouts, setWorkouts] = useState([]);

//   useEffect(() => {
//     const savedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
//     setWorkouts(savedWorkouts);
//   }, []);

//   const handleDelete = (index) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this workout?");
//     if (confirmDelete) {
//       const updatedWorkouts = workouts.filter((_, i) => i !== index);
//       setWorkouts(updatedWorkouts);
//       localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
//     }
//   };

//   return (
//     <div className="workout-list">
//       <h2>Workout History</h2>
//       {workouts.length === 0 ? (
//         <p>No workouts added yet.</p>
//       ) : (
//         <>
//           <h3>Male Workouts</h3>
//           <ul>
//             {workouts
//               .filter((workout) => workout.gender === "male")
//               .map((workout, index) => (
//                 <li key={index}>
//                   {workout.date} - {workout.workout} ({workout.duration} min)
//                   <button onClick={() => handleDelete(index)}>Delete</button>
//                 </li>
//               ))}
//           </ul>

//           <h3>Female Workouts</h3>
//           <ul>
//             {workouts
//               .filter((workout) => workout.gender === "female")
//               .map((workout, index) => (
//                 <li key={index}>
//                   {workout.date} - {workout.workout} ({workout.duration} min)
//                   <button onClick={() => handleDelete(index)}>Delete</button>
//                 </li>
//               ))}
//           </ul>
//         </>
//       )}
//     </div>
//   );
// };

// export default WorkoutList;
