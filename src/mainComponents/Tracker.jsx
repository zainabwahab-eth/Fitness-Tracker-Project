import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import FormOverlay from './FormOverlay'
import DeleteOverlay from './DeleteOverlay'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import run from '../assets/run.svg'
import lift from '../assets/lift.svg'
import filter from '../assets/filter.svg'
import calendar from '../assets/calendar.svg'
import duration from '../assets/duration.svg'
import trash from '../assets/trash.svg'

function Tracker() {
  const navigate = useNavigate()
  const { currentUser, logout } = useAuth()
  const entries = useSelector((state) => state.fitness.entries)
  const [isFormOverlayOpen, setIsFormOverlayOpen] = useState(false)
  const [isDeleteOverlayOpen, setIsDeleteOverlayOpen] = useState(false)
  const [deleteId, setDeleteId] = useState(0)
  const [chartData, setChartData] = useState([])
  const [filterType, setFilterType] = useState('All')
  const [showChart, setShowChart] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Add mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Clean up
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Process data for the chart
    const processChartData = () => {
      // Group entries by date
      const groupedByDate = {}

      // Filter entries if needed
      const filteredEntries =
        filterType === 'All' ? entries : entries.filter((entry) => entry.type === filterType)

      filteredEntries.forEach((entry) => {
        if (!groupedByDate[entry.date]) {
          groupedByDate[entry.date] = 0
        }
        groupedByDate[entry.date] += Number.parseInt(entry.duration)
      })

      // Convert to array format for the chart
      const chartData = Object.keys(groupedByDate).map((date) => ({
        date,
        duration: groupedByDate[date]
      }))

      // Sort by date
      chartData.sort((a, b) => new Date(a.date) - new Date(b.date))

      // Limit to last 7 entries for better visualization
      setChartData(chartData.slice(-7))
    }

    processChartData()
  }, [entries, filterType])

  const handleDeleteClick = (id) => {
    setIsDeleteOverlayOpen(true)
    setDeleteId(id)
  }

  const handleFilterChange = (e) => {
    setFilterType(e.target.value)
  }

  const toggleChart = () => {
    setShowChart(!showChart)
  }

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  const handleGoToHome = () => {
    navigate('/')
  }

  const totalDuration = () => {
    if (!entries || entries.length === 0) return '0mins'

    const duration = entries.map((entry) => entry.duration).reduce((acc, num) => +acc + +num, 0)

    if (duration >= 60) {
      const hours = Math.floor(duration / 60)
      const minutes = duration % 60
      return `${hours}hr${hours !== 1 ? 's' : ''}, ${minutes}min${minutes !== 1 ? 's' : ''}`
    } else {
      return `${duration}min${duration !== 1 ? 's' : ''}`
    }
  }

  return (
    <main className="main">
      <div className="nav-cntn">
        <div className="logo" onClick={handleGoToHome} style={{ cursor: 'pointer' }}>
          <div className="logo-icon">
            <div className="dumbbell-bar"></div>
            <div className="dumbbell-weight left"></div>
            <div className="dumbbell-weight right"></div>
          </div>
          <span className="logo-text">FitTrack</span>
        </div>
        <div className="user-controls">
          {currentUser && (
            <div className="user-info">
              <span>Hello, {currentUser.name}</span>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
          <div className="button-cntn">
            <button className={`sec-button ${showChart ? 'active' : ''}`} onClick={toggleChart}>
              {showChart ? 'Hide Chart' : 'Show Chart'}
            </button>
            <button className="pri-button" onClick={() => setIsFormOverlayOpen(true)}>
              Add workout
            </button>
          </div>
        </div>
      </div>

      <div className="duration-cntn">
        <h3>Total Duration: {totalDuration()}</h3>
      </div>

      {/* Chart Section - Only shown when showChart is true */}
      {showChart && (
        <div className="chart-container">
          <h3>Workout Duration by Date</h3>
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={isMobile ? 150 : 200}>
              <BarChart
                data={chartData}
                margin={
                  isMobile
                    ? { top: 10, right: 10, left: 0, bottom: 20 }
                    : { top: 20, right: 30, left: 20, bottom: 20 }
                }
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: isMobile ? 10 : 12 }}
                  angle={isMobile ? -45 : 0}
                  textAnchor={isMobile ? 'end' : 'middle'}
                  height={50}
                />
                <YAxis
                  label={isMobile ? null : { value: 'Minutes', angle: -90, position: 'insideLeft' }}
                  tick={{ fontSize: isMobile ? 10 : 12 }}
                />
                <Tooltip formatter={(value) => [`${value} mins`, 'Duration']} />
                <Bar dataKey="duration" fill="#76DF02" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="no-data">No data available for chart visualization</p>
          )}
        </div>
      )}

      <section className={`entries-cntn ${!showChart ? 'expanded' : ''}`}>
        <div className="text-cntn">
          <h2>All Workouts</h2>
          <div className="filter">
            <img
              src={filter || '/placeholder.svg?height=24&width=24'}
              alt="Filter Icon"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = '/placeholder.svg?height=24&width=24'
              }}
            />
            <select
              className="type-filter"
              name="type"
              value={filterType}
              onChange={handleFilterChange}
            >
              <option value="All">All Workout</option>
              <option value="Run">Run</option>
              <option value="Lift">Lift</option>
            </select>
          </div>
        </div>
        {!entries || entries.length === 0 ? (
          <div className="no-workouts">
            <p>No workouts logged yet.</p>
            <button className="add-first-workout" onClick={() => setIsFormOverlayOpen(true)}>
              Add your first workout
            </button>
          </div>
        ) : (
          <div className="workout-cards">
            {entries
              .filter((entry) => filterType === 'All' || entry.type === filterType)
              .map((entry) => (
                <article key={entry.id} className="workout-card">
                  <li>
                    <div className="top">
                      <div className="type-cntn">
                        {entry.type === 'Run' ? (
                          <img
                            src={run || '/placeholder.svg?height=24&width=24'}
                            alt="type-icon"
                            onError={(e) => {
                              e.target.onerror = null
                              e.target.src = '/placeholder.svg?height=24&width=24'
                            }}
                          />
                        ) : (
                          <img
                            src={lift || '/placeholder.svg?height=24&width=24'}
                            alt="type-icon"
                            onError={(e) => {
                              e.target.onerror = null
                              e.target.src = '/placeholder.svg?height=24&width=24'
                            }}
                          />
                        )}
                        <p>{entry.type}</p>
                      </div>
                      <button className="delete-btn" onClick={() => handleDeleteClick(entry.id)}>
                        <img
                          src={trash || '/placeholder.svg?height=24&width=24'}
                          alt="trash-icon"
                          onError={(e) => {
                            e.target.onerror = null
                            e.target.src = '/placeholder.svg?height=24&width=24'
                          }}
                        />
                        <p>delete</p>
                      </button>
                    </div>
                    <div className="down">
                      <div className="duration-cntn">
                        <img
                          src={duration || '/placeholder.svg?height=24&width=24'}
                          alt="duration-icon"
                          onError={(e) => {
                            e.target.onerror = null
                            e.target.src = '/placeholder.svg?height=24&width=24'
                          }}
                        />
                        <p>{`${entry.duration} mins`}</p>
                      </div>
                      <div className="calendar-cntn">
                        <img
                          src={calendar || '/placeholder.svg?height=24&width=24'}
                          alt="calendar-icon"
                          onError={(e) => {
                            e.target.onerror = null
                            e.target.src = '/placeholder.svg?height=24&width=24'
                          }}
                        />
                        <p>{entry.date}</p>
                      </div>
                    </div>
                  </li>
                </article>
              ))}
          </div>
        )}
      </section>

      <FormOverlay isOpen={isFormOverlayOpen} onClose={() => setIsFormOverlayOpen(false)} />
      <DeleteOverlay
        deleteId={deleteId}
        isOpen={isDeleteOverlayOpen}
        onClose={() => setIsDeleteOverlayOpen(false)}
      />
    </main>
  )
}

export default Tracker
