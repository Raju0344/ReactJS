import React from 'react';
import Card from './components/Card.jsx';
import Navbar from './components/Navbar.jsx'

const App = () => {

  const user = "Hitest kumar";
  const age = 29;

  return (
    <div>
      <Navbar/>
      <Navbar/>
      <Card/>
      <Card/>
      
    </div>
  )
}

export default App