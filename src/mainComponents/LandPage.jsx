'use client'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import '../LandPage.css'
import trackingIcon from '../assets/tracking-icon.png'
import progressIcon from '../assets/progress-icon.png'
import securityIcon from '../assets/security-icon.png'
import heroImage from '../assets/image.jpg'

const LandPage = () => {
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const handleSignupClick = () => {
    navigate('/signup')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <div className="land-page">
      {/* Hero Section */}
      <header
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`
        }}
      >
        <nav className="navbar">
          <div className="logo">
            <div className="logo-icon">
              <div className="dumbbell-bar"></div>
              <div className="dumbbell-weight left"></div>
              <div className="dumbbell-weight right"></div>
            </div>
            <span className="logo-text">FitTrack</span>
          </div>
          <div className="nav-buttons">
            {isAuthenticated() ? (
              <>
                <button onClick={() => navigate('/tracker')} className="dashboard-button">
                  Dashboard
                </button>
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              </>
            ) : (
              <>
                <button onClick={handleLoginClick} className="login-button">
                  Login
                </button>
                {/* <button onClick={handleSignupClick} className="cta-button">
                  Sign Up Free
                </button> */}
              </>
            )}
          </div>
        </nav>

        <div className="hero-content">
          <h1>
            Track Your Workouts
            <br />
            Stay Motivated
          </h1>
          <p>The simplest way to keep track of your fitness journey and achieve your goals</p>
          <button
            onClick={() => navigate(isAuthenticated() ? '/tracker' : '/signup')}
            className="cta-button hero-cta"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose FitTrack?</h2>
        <div className="feature-card">
          <div className="feature-image">
            <img
              src={trackingIcon || '/placeholder.svg?height=200&width=200'}
              alt="Workout Tracking"
            />
          </div>
          <div className="feature-content">
            <h2>Effortless Workout Tracking</h2>
            <p>
              Log your workouts in less than 30 seconds. Whether it's cardio, strength, or any other
              activity, our simple interface makes it easy to record and track your fitness journey.
            </p>
          </div>
        </div>

        <div className="feature-card reverse">
          <div className="feature-image">
            <img
              src={progressIcon || '/placeholder.svg?height=200&width=200'}
              alt="Progress Tracking"
            />
          </div>
          <div className="feature-content">
            <h2>View Your Progress Over Time</h2>
            <p>
              Watch your progress with intuitive charts and visualizations. See how your workouts
              improve over time, identify patterns, and stay motivated with clear visual feedback.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-image">
            <img src={securityIcon || '/placeholder.svg?height=200&width=200'} alt="Security" />
          </div>
          <div className="feature-content">
            <h2>100% Free, Private & Secure</h2>
            <p>
              Your fitness data belongs to you. We don't sell your information to third parties, and
              we use industry-standard encryption to keep your data safe and secure.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps-section">
        <h2 className="section-title">Get Started in 3 easy steps</h2>

        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Log Your Workout</h3>
            <p>Select activity type, duration, and date</p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Track Your Progress</h3>
            <p>View and analyze your growth</p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Stay Consistent</h3>
            <p>Build healthy habits and reach your fitness goals</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Start Your Fitness Journey Today!</h2>
        <p>Free, intuitive, no-commitment, and no credit card required.</p>
        <button
          onClick={() => navigate(isAuthenticated() ? '/tracker' : '/signup')}
          className="cta-button"
        >
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="logo">
            <div className="logo-icon">
              <div className="dumbbell-bar"></div>
              <div className="dumbbell-weight left"></div>
              <div className="dumbbell-weight right"></div>
            </div>
            <span className="logo-text">FitTrack</span>
          </div>
          <div className="footer-links">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                navigate('/')
              }}
            >
              Home
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                navigate('/tracker')
              }}
            >
              Dashboard
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                navigate('/login')
              }}
            >
              Login
            </a>
          </div>
        </div>
        <p>© {new Date().getFullYear()} FitTrack. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default LandPage

// import React from 'react'
// import '../LandPage-Style.css'
// import workout from '../assets/workout.svg'
// import progress from '../assets/progress.svg'
// import data from '../assets/data.svg'
// import { useNavigate } from 'react-router-dom'

// function LandPage() {
//   const navigate = useNavigate()

//   const handleGetStarted = () => {
//     navigate('/login')
//   }

//   return (
//     <div>
//       <div className="header">
//         <div className="head">
//           <h2 className="head-logo">ZIMCS</h2>

//           <button className="get-started-btn" onClick={handleGetStarted}>
//             Get Started
//           </button>
//         </div>
//         <div className="first-container">
//           <h1>Track Your Workouts, Stay Motivated!</h1>
//           <p>
//             Your all-in-one fitness companion to log Workouts. track progress and achieve your
//             goals.
//           </p>
//           <button className="get-started-btn">Get Started</button>
//         </div>
//       </div>
//       <div className="second-container">
//         <h2>Why Choose Our Fitness Tracker?</h2>
//         <div className="features">
//           <div className="feature-content-1">
//             <div>
//               <img className="feature-svg" src={workout} alt="" />
//             </div>
//             <div className="feature-text">
//               <h3>Effortless Workout Tracking</h3>
//               <p>
//                 Logging your workouts has never been simpler whether you're running, weighing, doing
//                 yoga, or any other activity.our fitness tracker lets you quickly record and manage
//                 your exercise in just a few clicks
//               </p>
//             </div>
//           </div>
//           <div className="feature-content-2">
//             <div className="feature-text">
//               <h3>View Your Progress Over Time</h3>
//               <p>
//                 Easily access part workouts analyze trends, and see how you're improving over time.
//                 With our detailed history logs, you'll always have a clear picture of your fitness
//                 progress.
//               </p>
//             </div>
//             <div>
//               <img className="feature-svg" src={progress} alt="" />
//             </div>
//           </div>
//           <div className="feature-content-3">
//             <div>
//               <img className="feature-svg" src={data} alt="" />
//             </div>
//             <div className="feature-text">
//               <h3>100% Free , Private & Secure</h3>
//               <p>
//                 Your fitness data is yours clone, Our app securely stores your workout history in
//                 your browser's local storage, meaning no accounts, no passwords, and no third-party.
//                 have access to your personal information.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="third-container">
//         <h2>Get Started in 3 easy steps</h2>
//         <div className="steps">
//           <div className="step">
//             <span>1</span>
//             <h3>Log Your Workout</h3>
//             <p>Select activity types duration and date.</p>
//           </div>
//           <div className="step">
//             <span>2</span>
//             <h3>Track Your Progress</h3>
//             <p>View and analyze past entires</p>
//           </div>
//           <div className="step">
//             <span>3</span>
//             <h3>Stay Consistent</h3>
//             <p>Stay motivated and achieve your goals.</p>
//           </div>
//         </div>
//       </div>
//       <div className="fourth-container">
//         <h2>Start Your Fitness Journey Today!</h2>
//         <p>Log workouts, stay motivated, and hit your goals</p>
//         <button className="get-started-btn">Get Started</button>
//       </div>
//       <div className="footer">
//         <h3>ZIMC</h3>
//       </div>
//     </div>
//   )
// }

// export default LandPage
