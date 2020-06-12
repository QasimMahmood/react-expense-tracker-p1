import React from 'react';
import { Title } from './Components/Title';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpenses';

import './App.css';

function App() {
  return (
    <div>
       <Title />
       <div class="container">
         <Balance />
         <IncomeExpenses />
       </div>
    </div>
  );
}
export default App;
