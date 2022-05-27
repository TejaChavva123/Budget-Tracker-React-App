import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import { TransactionList } from './components/TransactionList';
import GlobalProvider from './contexts/Global'
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
