import Add from "./components/pages/Add Page/Add";
import Home from "./components/pages/Home Page/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
