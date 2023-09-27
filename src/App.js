import './App.css';
import useFetch from './common/useFetch';

function App() {

  const { data, error, isPending, refreshData } = useFetch('https://jsonplaceholder.typicode.com/users');


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={refreshData}>Click button to refresh</button>
        {
          isPending && <p>Fetcing Data !!!</p>
        }
        {
          error && <p>Error fetcing information: error</p>
        }
        {
          data && <ul>{data.map((dataObj) => <li>{dataObj.name}</li>)}</ul>
        }
      </header>
    </div>
  );
}

export default App;
