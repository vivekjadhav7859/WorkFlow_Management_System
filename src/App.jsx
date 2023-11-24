import Navbar from "./Components/Navbar"
import Careers from "./routes/Careers";
import Login from "./routes/Login";
import Services from "./routes/Services"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </Router>
    </>
  )
}

export default App