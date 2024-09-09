import './App.css';
import Header from './components/Header/Header';
import FinanceControl from './components/FinanceControl/FinanceControl';

function App() {
  const  finances = [
    {
      id: 1,
      description: "Despesas", 
    },
    {
      id: 2,
      description: "Saldo", 
    },
    {
      id: 3,
      description: "Dívidas", 
    },
    {
      id: 4,
      description: "Gastos", 
    },
  ];
  return (
    <>
     <div>
      <Header />
      <FinanceControl datas={finances}/>
     </div>
    </>
  );
}

export default App;
