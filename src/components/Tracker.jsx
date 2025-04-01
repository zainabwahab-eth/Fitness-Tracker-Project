import React, { useState } from "react";
import { useSelector } from "react-redux";
import FormOverlay from "./FormOverlay";
import run from "../assets/run.svg";
import lift from "../assets/lift.svg";
import filter from "../assets/filter.svg";
import calendar from "../assets/calendar.svg";
import duration from "../assets/duration.svg";
import trash from "../assets/trash.svg";
import DeleteOverlay from "./DeleteOverlay";
import "./tracker.css";

function Tracker() {
  const entries = useSelector((state) => state.fitness.entries);
  const [isFormOverlayOpen, setIsFormOverlayOpen] = useState(false);
  const [isDeleteOverlayOpen, setIsDeleteOverlayOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  const handleDeleteClick = function (id) {
    setIsDeleteOverlayOpen(true);
    setDeleteId(id);
  };

  const totalDuration = function () {
    const duration = entries
      .map((entry) => entry.duration)
      .reduce((acc, num) => +acc + +num, 0);

    if (duration >= 60) {
      const hours = Math.floor(duration / 60);
      const minutes = duration % 60;

      return `${hours}hr${hours !== 1 ? "s" : ""}, ${minutes}min${
        minutes !== 1 ? "s" : ""
      }`;
    } else {
      return `${duration}min${duration !== 1 ? "s" : ""}`;
    }
  };

  return (
    <main className="main">
      <div className="nav-cntn">
        <h2>ZIMCS</h2>
        <div className="button-cntn">
          <button className="sec-button">View Tracker</button>
          <button
            className="pri-button"
            onClick={() => setIsFormOverlayOpen(true)}
          >
            Add workout
          </button>
          <FormOverlay
            isOpen={isFormOverlayOpen}
            onClose={() => setIsFormOverlayOpen(false)}
          />
        </div>
      </div>

      <div className="duration-cntn">
        <h3>Total Duration: {totalDuration()}</h3>
      </div>
      <section className="entries-cntn">
        <div className="text-cntn">
          <h2>All Workouts</h2>
          <div className="filter">
            <img src={filter} alt="Filter Icon" />
            <select className="type-filter" name="type" value="" onChange="">
              <option value="All">All Workout</option>
              <option value="Run">Run</option>
              <option value="Lift">Lift</option>
            </select>
          </div>
        </div>
        {entries.length === 0 ? (
          <p>No workouts logged yet.</p>
        ) : (
          <div className="workout-cards">
            {" "}
            {entries.map((entry) => (
              <article key={entry.id} className="workout-card">
                <li>
                  <div className="top">
                    <div className="type-cntn">
                      {entry.type === "Run" ? (
                        <img src={run} alt="type-icon" />
                      ) : (
                        <img src={lift} alt="type-icon" />
                      )}
                      <p>{entry.type}</p>
                    </div>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteClick(entry.id)}
                    >
                      <img src={trash} alt="trash-icon" />
                      <p>delete</p>
                    </button>
                    <DeleteOverlay
                      deleteId={deleteId}
                      isOpen={isDeleteOverlayOpen}
                      onClose={() => setIsDeleteOverlayOpen(false)}
                    />
                  </div>
                  <div className="down">
                    <div className="duration-cntn">
                      <img src={duration} alt="duration-icon" />
                      <p>{`${entry.duration} mins`}</p>
                    </div>
                    <div className="calendar-cntn">
                      <img src={calendar} alt="calendar-icon" />
                      <p>{entry.date}</p>
                    </div>
                  </div>
                </li>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Tracker;
