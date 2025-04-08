'use client'

import { useState, useEffect } from 'react'
import './FormOverlay.css'
import { useDispatch, useSelector } from 'react-redux'
import { addEntry } from './redux/fitnessSlice'

function FormOverlay({ isOpen, onClose }) {
  const [gender, setGender] = useState('')
  const [workout, setWorkout] = useState('')
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [duration, setDuration] = useState(0)
  const [timerActive, setTimerActive] = useState(false)
  const [startTime, setStartTime] = useState(null)
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [timerId, setTimerId] = useState(null)

  const dispatch = useDispatch()
  const isDarkMode = useSelector((state) => state.ui?.darkMode)

  const maleWorkouts = ['Push-ups', 'Pull-ups', 'Deadlifts', 'Running']
  const femaleWorkouts = ['Yoga', 'Pilates', 'Jump Rope', 'Squats']

  useEffect(() => {
    let interval
    if (timerActive && startTime) {
      interval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000)
        setElapsedSeconds(elapsed)
        setDuration(Math.max(1, Math.floor(elapsed / 60)))
      }, 1000) // Update every second for a more responsive UI
      setTimerId(interval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [timerActive, startTime])

  const handleTimer = () => {
    if (timerActive) {
      // Stop timer
      clearInterval(timerId)
      const totalTime = Math.floor((Date.now() - startTime) / 60000)
      setDuration(Math.max(1, totalTime)) // Ensure at least 1 minute
      setTimerActive(false)
    } else {
      // Start timer
      setStartTime(Date.now())
      setTimerActive(true)
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  // Update the handleSubmit function to properly map workout types to the app's existing categories
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!gender || !workout || !date || duration === 0) {
      alert('Please fill in all fields!')
      return
    }

    // Stop timer if it's still running
    if (timerActive) {
      setTimerActive(false)
      clearInterval(timerId)
    }

    // Map workout types to the app's existing categories
    let workoutType = 'Lift' // Default to Lift
    if (workout === 'Running') {
      workoutType = 'Run'
    }

    const newEntry = {
      id: Date.now(),
      type: workoutType,
      duration,
      date,
      details: {
        gender,
        specificWorkout: workout
      }
    }

    dispatch(addEntry(newEntry))

    // Reset form
    setGender('')
    setWorkout('')
    setDate(new Date().toISOString().split('T')[0])
    setDuration(0)
    setElapsedSeconds(0)
    setTimerId(null)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className={`overlay ${isDarkMode ? 'dark' : ''}`} onClick={onClose}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>Add Workout</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Gender:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              disabled={timerActive}
              className={timerActive ? 'disabled' : ''}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label>Workout Type:</label>
            <select
              value={workout}
              onChange={(e) => setWorkout(e.target.value)}
              disabled={timerActive || !gender}
              className={timerActive || !gender ? 'disabled' : ''}
            >
              <option value="">Select Workout</option>
              {gender === 'male' &&
                maleWorkouts.map((w, index) => (
                  <option key={index} value={w}>
                    {w}
                  </option>
                ))}
              {gender === 'female' &&
                femaleWorkouts.map((w, index) => (
                  <option key={index} value={w}>
                    {w}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              disabled={timerActive}
              className={timerActive ? 'disabled' : ''}
            />
          </div>

          <div className="timer-section">
            {timerActive ? (
              <div className="timer-display">
                <p className="timer-value">{formatTime(elapsedSeconds)}</p>
                <p className="timer-label">Workout in progress...</p>
              </div>
            ) : (
              <div className="duration-display">
                <p className="duration-value">{duration} min</p>
                <p className="duration-label">Duration</p>
              </div>
            )}
          </div>

          <div className="form-buttons">
            <button
              type="button"
              className={`timer-btn ${timerActive ? 'stop' : 'start'}`}
              onClick={handleTimer}
              disabled={!workout}
            >
              {timerActive ? 'Stop Timer' : 'Start Timer'}
            </button>

            <button
              type="submit"
              className="save-btn"
              disabled={!gender || !workout || !date || (duration === 0 && !timerActive)}
            >
              Save Workout
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormOverlay

// import React, { useState, useEffect } from 'react'
// import './overlay.css'
// import { useDispatch } from 'react-redux'
// import { addEntry } from './redux/fitnessSlice'

// function FormOverlay({ isOpen, onClose }) {
//   if (!isOpen) return null

//   const [gender, setGender] = useState('')
//   const [workout, setWorkout] = useState('')
//   const [date, setDate] = useState('')
//   const [duration, setDuration] = useState(0)
//   const [timerActive, setTimerActive] = useState(false)
//   const [startTime, setStartTime] = useState(null)

//   const dispatch = useDispatch()

//   const maleWorkouts = ['Push-ups', 'Pull-ups', 'Deadlifts', 'Running']
//   const femaleWorkouts = ['Yoga', 'Pilates', 'Jump Rope', 'Squats']

//   useEffect(() => {
//     let interval
//     if (timerActive) {
//       setStartTime(Date.now())
//       interval = setInterval(() => {
//         setDuration((prevDuration) => prevDuration + 1)
//       }, 60000) // 60,000ms = 1 minute
//     } else {
//       clearInterval(interval)
//     }
//     return () => clearInterval(interval)
//   }, [timerActive])

//   const handleTimer = () => {
//     if (timerActive) {
//       const totalTime = Math.floor((Date.now() - startTime) / 60000)
//       setDuration(totalTime)
//     }
//     setTimerActive(!timerActive)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (!gender || !workout || !date || duration === 0) {
//       alert('Please fill in all fields!')
//       return
//     }

//     dispatch(addEntry({ id: Date.now(), gender, workout, date, duration }))
//     setGender('')
//     setWorkout('')
//     setDate('')
//     setDuration(0)
//     onClose()
//   }

//   return (
//     <div className="overlay" onClick={onClose}>
//       <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
//         <button className="close-btn" onClick={onClose}>
//           x
//         </button>
//         <h2>Add Workout</h2>
//         <form onSubmit={handleSubmit}>
//           <label>Gender:</label>
//           <select value={gender} onChange={(e) => setGender(e.target.value)}>
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>

//           <label>Workout Type:</label>
//           <select value={workout} onChange={(e) => setWorkout(e.target.value)}>
//             <option value="">Select Workout</option>
//             {gender === 'male' && maleWorkouts.map((w, index) => <option key={index}>{w}</option>)}
//             {gender === 'female' &&
//               femaleWorkouts.map((w, index) => <option key={index}>{w}</option>)}
//           </select>

//           <label>Date:</label>
//           <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

//           <label>Duration: {duration} min</label>
//           <button type="button" onClick={handleTimer}>
//             {timerActive ? 'Stop Timer' : 'Start Timer'}
//           </button>

//           <button type="submit">Save Workout</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default FormOverlay

// // import React, { useState } from "react";
// // import "./overlay.css";
// // import { useDispatch, useSelector } from "react-redux";
// // import { addEntry } from "./redux/fitnessSlice";

// // function FormOverlay({ isOpen, onClose }) {
// //   if (!isOpen) return null;

// //   const [activity, setActivity] = useState({
// //     type: "",
// //     duration: "",
// //     date: "",
// //   });

// //   const dispatch = useDispatch();

// //   const handleChange = (e) => {
// //     setActivity({ ...activity, [e.target.name]: e.target.value });
// //   };

// //   const handleAddEntry = () => {
// //     if (activity.type && activity.duration && activity.date) {
// //       dispatch(addEntry({ id: Date.now(), ...activity }));
// //       setActivity({ type: "", duration: "", date: "" });
// //       onClose();
// //     }
// //   };

// //   return (
// //     <div className="overlay" onClick={onClose}>
// //       <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
// //         <button className="close-btn" onClick={onClose}>
// //           x
// //         </button>
// //         <h2>Add Overlay</h2>
// //         <select
// //           className="type-select"
// //           name="type"
// //           value={activity.type}
// //           onChange={handleChange}
// //         >
// //           <option value="">Select Type</option>
// //           <option value="Run">Run</option>
// //           <option value="Lift">Lift</option>
// //         </select>

// //         <input
// //           className="duration"
// //           type="number"
// //           name="duration"
// //           placeholder="Duration (minutes)"
// //           value={activity.duration}
// //           onChange={handleChange}
// //         />

// //         <input
// //           className="date"
// //           type="date"
// //           name="date"
// //           value={activity.date}
// //           onChange={handleChange}
// //         />

// //         <button className="pri-button" onClick={handleAddEntry}>
// //           Add Activity
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default FormOverlay;
