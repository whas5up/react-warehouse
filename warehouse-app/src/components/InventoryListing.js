import InventoryListingItem from './InventoryListingItem.js';
import React, {useState} from 'react';


function InventoryListing(props){

    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    
    const Style = {
        margin: "0 auto",
        width: "30vw",
        border: "0.2vw solid black"
    }

    const buttonStyle = {
        width: "50%"
    }

    var List = [
        <InventoryListingItem />,
        <InventoryListingItem />,
        <InventoryListingItem />,
        <InventoryListingItem />,
        <InventoryListingItem />,
        <InventoryListingItem />,
        <InventoryListingItem />,
        <InventoryListingItem />,
        <InventoryListingItem />,
        <InventoryListingItem />
    ]

    const allListingItems = []

    for (let i=0; i < 51; i++){
       allListingItems.push(<InventoryListingItem count={i} key={i} />)
    }

    const visibleListingItems = allListingItems.slice(currentPageIndex,
        currentPageIndex+props.maxVisible)
    console.log(visibleListingItems)

    
    function previousPage() {
        if (currentPageIndex > 0) {
            setCurrentPageIndex(currentPageIndex - props.maxVisible);
        }
    }

    function nextPage() {
        if (currentPageIndex + props.maxVisible < allListingItems.length) {
            setCurrentPageIndex(currentPageIndex + props.maxVisible);
        }
    }

    return(
        <div style={Style}>
            {visibleListingItems}
            <button onClick={previousPage} style={buttonStyle}>Previous</button><button onClick={nextPage} style={buttonStyle}>Next</button>
        </div>
    )
}


export default InventoryListing