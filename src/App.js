import React from 'react';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import data from './data.js'

function App() {


  return (
    <div className="app__container">

      <Nav />

      <Header name={data.ProductName} />

      <Main 
      facts={data.Facts}  
      opinions={data.Opinions}
      experiences={data.Experiences}
      />

    </div>
  );
}

export default App;
