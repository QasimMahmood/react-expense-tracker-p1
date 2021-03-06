import React from 'react';
import { Title } from './Components/Title';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';

import { GlobalProvider } from './Context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
       
       <div className="container">
         <Title />
         <Balance />
         <IncomeExpenses />
         <TransactionList />
         <AddTransaction />
       </div>
    </GlobalProvider>
  );
}
export default App;
