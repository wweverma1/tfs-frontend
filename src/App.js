import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
