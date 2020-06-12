import React from 'react';
import { Title } from './Components/Title';
import { Balance } from './Components/Balance';
import './App.css';

function App() {
  return (
    <div>
       <Title />
       <div class="container">
         <Balance />
       </div>
    </div>
  );
}
export default App;
