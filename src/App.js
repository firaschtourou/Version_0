import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authen from "./KidsPages/Authen/Authentification";
import SaveNamePage from "./KidsPages/SaveName/SaveName";
import Dashboard from "./KidsPages/Dashbord/Dashbord";
import Consulter from "./KidsPages/Consulter/Consulter";
import Quiz from "./KidsPages/QuizKid/DashboradQuiz";
import VoirCours from "./KidsPages/VoirCours/VoirCours";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authen />} />
        <Route path="/save-name" element={<SaveNamePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/consulter" element={<Consulter />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/voircours" element={<VoirCours />} />
      </Routes>
    </Router>
  );
};

export default App;
