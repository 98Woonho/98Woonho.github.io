import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
		<Routes>
		  <Route exact path="/" element={<Home />} />
		  <Route exact path="/about" element={<AboutPage />} />
		  <Route exact path="/projects" element={<ProjectsPage />} />
		</Routes>
	  </BrowserRouter>
	);
}

export default App;
