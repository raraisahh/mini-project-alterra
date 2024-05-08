/* eslint-disable no-unused-vars */
import React,{ useEffect }  from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Routing from './pages/Routing/routing'

function App() {

  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;