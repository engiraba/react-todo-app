import logo from './logo.svg';
import './App.css';

function App() {

  const dummyData : [] = [
    'Do groceries shopping',
    'Repair micro-waves'
  ]

  return (
    <div className="App">
      <header className="App-header">
        {
          dummyData.map((item, i) => {
            return <ul> {item} </ul>;
          })
        }
      </header>
    </div>
  );
}

export default App;
