import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Table from './components/Table/Table';



const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>} />
          <Route path="/table" element={<Table></Table>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}
export default App
