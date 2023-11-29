import React from 'react';
import './App.css';
import InputField from './components/InputField';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className='header section padding'>
        <div className="header__content section padding">
            <h1 className="header__title">DO IT NOW</h1>
            <InputField />
        </div>
      </div>
    </div>
  );
}

export default App;
