import React,{useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';

import Subscription from './pages/Subscription';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Layout from './components/shared/Layout';
import Assignment from './pages/Assignment';


function App() {

  return (
    <Layout>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="subscription" element={<Subscription/>}/>
        <Route path="assignment" element={<Assignment/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
