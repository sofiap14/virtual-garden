import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home.js'
import Navbar from './components/NavBar.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <div className = "pages">
            <Routes>
              <Route 
                path = "/"
                element={<Home />}
              />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;