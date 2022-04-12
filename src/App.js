import './App.css';
import Navbar from './compoments/Navbar';
import FirstTable from './compoments/FirstTable';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getallemployee } from './actions/employees';
function App() {
  const dispatch = useDispatch();
useEffect(() => {
        dispatch(getallemployee());
    }, [dispatch])


  return (
    <div className="App">
      <Navbar />
      <FirstTable/>
    </div>
  );
}

export default App;
