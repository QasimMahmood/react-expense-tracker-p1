import React from 'react';
import { Title } from './Components/Title';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';

import './App.css';

function App() {
  return (
    <div>
       <Title />
       <div class="container">
         <Balance />
         <IncomeExpenses />
         <TransactionList />
         <AddTransaction />
       </div>
    </div>
  );
}
export default App;
