import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/users', label: 'Users' },
    { path: '/activities', label: 'Activities' },
    { path: '/teams', label: 'Teams' },
    { path: '/leaderboard', label: 'Leaderboard' },
    { path: '/workouts', label: 'Workouts' },
  ];

  return (
    <div className="app-shell py-4 py-lg-5">
      <div className="container">
        <header className="card border-0 shadow-sm mb-4">
          <div className="card-body p-4">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
              <h1 className="display-6 mb-0">OctoFit Tracker</h1>
            </div>

            <nav className="navbar navbar-expand-lg p-0" aria-label="OctoFit main navigation">
              <ul className="navbar-nav flex-row flex-wrap gap-2">
                {navItems.map((item) => (
                  <li key={item.path} className="nav-item">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `btn btn-sm ${isActive ? 'btn-light text-primary' : 'btn-outline-light'}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/users" element={<Users />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="*" element={<Users />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
