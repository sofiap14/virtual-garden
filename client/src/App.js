import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Welcome from './pages/WelcomePage.js';
import Home from './pages/Home.js'
import LogoutButton from './components/Logout.js';
import GardenPage from './pages/GardenPage.js'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div className = "pages">
            <Routes>
              <Route 
                path = "/"
                element={<Welcome />}
              />
              <Route
                path = "/home"
                element={<Home/>}
              />
              <Route 
                path = "/logout"
                element={<LogoutButton/ >}
              />
              <Route
              path = "/gardens/:id/plants"
              element={<GardenPage />}
              />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;