import Navbar from "./Components/Navbar"
import Services from "./routes/Services"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>
  )
}

export default App