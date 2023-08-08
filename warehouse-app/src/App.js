import './App.css';
import NavBar from './components/NavBar.js';
import InventoryListing from './components/InventoryListing.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Warehouse App</h1>
      <InventoryListing maxVisible={15} />
    </div>
  );
}

export default App;
