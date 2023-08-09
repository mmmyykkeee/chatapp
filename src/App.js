import "./index.css";
import MainScreen from "./components/mainscreen/MainScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/LoginModal/LogIn";
import SignUp from "./components/LoginModal/SignUp";

function App() {
  return (
    <div className="bg-[#adbef7] w-screen h-screen flex items-center justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/chat" element={<MainScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
