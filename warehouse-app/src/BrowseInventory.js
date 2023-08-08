import './App.css';
import InventoryListing from './components/InventoryListing.js';
import NavBar from './components/NavBar.js';

function BrowseInventory() {
  return (
    <div className="App">
      <h1>Inventory Listing</h1>
      <NavBar />
      <InventoryListing maxVisible={15} />
    </div>
  );
}

export default BrowseInventory;
