import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './component/layout/layout';
import Dashboard from './container/dashboard';
import Login from './container/login';
import Register from './container/Register';
import { autoLogin } from './context/Logic';

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Navigate to={autoLogin()}/>}/>
            <Route path="login/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
