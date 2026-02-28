import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './routes/home/HomePage';
import ProjectPage from './routes/projects/ProjectPage';
import ProjectView from './routes/projects/view/ProjectView';
import AboutPage from './routes/about/AboutPage';
import { Analytics } from "@vercel/analytics/react"
import Logbook from './routes/logbook/Logbook';
import { resumeLink } from './content/about/about';

/// Redirects to my resume
const ResumeRedirect = () => {
  useEffect(() => {
    window.location.href = resumeLink;
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-lg">
        Redirecting...
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage/> } />
          <Route path='/projects' element={ <ProjectPage /> } />
          <Route path='/projects/:name' element={ <ProjectView /> } />
          <Route path='/about' element={ <AboutPage /> } />
          <Route path='/logbook' element={ <Logbook /> } />
          <Route path='/resume' element={ <ResumeRedirect /> }/>
        </Routes>
        <Analytics />
    </BrowserRouter>
  );
}

export default App;
