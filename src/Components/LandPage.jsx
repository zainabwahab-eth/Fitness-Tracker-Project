import React from "react";
import "./LandPage-Style.css";
import workout from "../assets/workout.svg";
import progress from "../assets/progress.svg";
import data from "../assets/data.svg";
function LandPage() {
  return (
    <div>
      <div className="header">
        <div className="head">
          <h2 className="head-logo">LOGO</h2>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div className="first-container">
          <h1>Track Your Workouts, Stay Motivated!</h1>
          <p>
            Your all-in-one fitness companion to log Workouts. track progress
            and achieve your goals.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
      <div className="second-container">
        <h2>Why Choose Our Fitness Tracker?</h2>
        <div className="features">
          <div className="feature-content-1">
            <div>
              <img className="feature-svg" src={workout} alt="" />
            </div>
            <div className="feature-text">
              <h3>Effortless Workout Tracking</h3>
              <p>
                Logging your workouts has never been simpler whether you're
                running, weighing, doing yoga, or any other activity.our fitness
                tracker lets you quickly record and manage your exercise in just
                a few clicks
              </p>
            </div>
          </div>
          <div className="feature-content-2">
            <div className="feature-text">
              <h3>View Your Progress Over Time</h3>
              <p>
                Easily access part workouts analyze trends, and see how you're
                improving over time. With our detailed history logs, you'll
                always have a clear picture of your fitness progress.
              </p>
            </div>
            <div>
              <img className="feature-svg" src={progress} alt="" />
            </div>
          </div>
          <div className="feature-content-3">
            <div>
              <img className="feature-svg" src={data} alt="" />
            </div>
            <div className="feature-text">
              <h3>100% Free , Private & Secure</h3>
              <p>
                Your fitness data is yours clone, Our app securely stores your
                workout history in your browser's local storage, meaning no
                accounts, no passwords, and no third-party. have access to your
                personal information.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="third-container">
        <h2>Get Started in 3 easy steps</h2>
        <div className="steps">
          <div className="step">
            <span>1</span>
            <h3>Log Your Workout</h3>
            <p>Select activity types duration and date.</p>
          </div>
          <div className="step">
            <span>2</span>
            <h3>Track Your Progress</h3>
            <p>View and analyze past entires</p>
          </div>
          <div className="step">
            <span>3</span>
            <h3>Stay Consistent</h3>
            <p>Stay motivated and achieve your goals.</p>
          </div>
        </div>
      </div>
      <div className="fourth-container">
        <h2>Start Your Fitness Journey Today!</h2>
        <p>Log workouts, stay motivated, and hit your goals</p>
        <button className="get-started-btn">Get Started</button>
      </div>
      <div className="footer">
        <h3>LOGO</h3>
      </div>
    </div>
  );
}

export default LandPage;
