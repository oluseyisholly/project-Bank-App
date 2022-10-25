import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './component/layout/layout';
import Dashboard from './container/dashboard';
import Login from './container/login';
import Register from './container/Register';
import { autoLogin } from './context/Logic';
import routes from './routes';

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={routes.index} element={<Navigate to={autoLogin()}/>}/>
            <Route path={routes.login} element={<Login/>} />
            <Route path={routes.register} element={<Register/>} />
            <Route path={routes.dashboard} element={<Dashboard/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
