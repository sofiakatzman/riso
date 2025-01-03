import React, { useEffect } from 'react';
import './App.css';
import Risograph from './component/Risograph';
import RISO1 from './risographs/RISO1';
import RISO2 from './risographs/RISO2';
import RISO3 from './risographs/RISO3';

function App() {
  useEffect(() => {
    // Add a click event listener to refresh the page
    const handleBodyClick = () => {
      window.location.reload();
    };

    document.body.addEventListener('click', handleBodyClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'div',
      { className: 'main' },
      React.createElement(Risograph, { data: RISO1 }),
      React.createElement(Risograph, { data: RISO2 }),
      React.createElement(Risograph, { data: RISO3 })
    ),
    React.createElement('p', null, 'refresh to restamp the page')
  );
}

export default App;
