import React from 'react';
// import Contact from './Contact';
import Consulting from './Consulting';


const App = () => {
  return (

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '400px' }}>
        <h1> Consulting form</h1>
        <Consulting />
      </div>
    </div>

  );
};

export default App;