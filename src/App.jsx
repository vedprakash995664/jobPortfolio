import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Component/Homepage';
import Header from './Component/Header';
import Frame from './Component/Frame';
import WorkProcess from './Component/WorkProcessWebsite';
import Category from './Component/Category';
import FeaturedJob from './Component/FeaturedJob';
import FeatureCompanies from './Component/FeaturedCompanies';
import Reviews from './Component/Reviews';
import Action from './Component/Action';
import Foot from './Component/Foot';
import FindJob from './Component/FindJob';
import CategoryFullpage from './Component/CategoryFullpage';
import TopCompany from './Component/TopCompany';
import SignUp from './Component/Signup';
import Login from './Component/Login';
import JobDetails from './Component/JobDetails';
import About from './Component/About';
import User_dashboard from './Component/Candidates/User_dashboard';
import Dashboard from './Component/Dashboard'
import Recruiter from './Component/Recruiter/Recruiter_Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route path='/frame' element={<Frame/>}/>
        <Route path='workprocess' element={<WorkProcess/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/job' element={<FeaturedJob/>}/>
        <Route path='/company' element={<FeatureCompanies/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/action' element={<Action/>}/>
        <Route path='/footer' element={<Foot/>}/>
        <Route path='/findjob' element={<FindJob/>}/>
        <Route path='/categorypage' element={<CategoryFullpage/>}/>
        <Route path='/topcompany' element={<TopCompany/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/jobdetails' element={<JobDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/udashboard' element={<User_dashboard/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/rdashboard' element={<Recruiter/>}/>
      </Routes>
    </Router>
  )
}

export default App
