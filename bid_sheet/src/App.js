import Navbar from "./components/Navbar";
import BidFieldsRenderer from "./components/BidFieldsRenderer";
import {useState} from "react"


function App() {
  // State holds and array of objects that holds another nested array of objects
  // Outer array contains separates each button and inner array separates the form data
  // from the input boxes as objects 
  const [bid, setBid] = useState([
    {
      "Building Dimensions": [
        {name: "Length", value: 0},
        {name: "Width", value: 0},
        {name: "Height", value: 0},
        {name: "Overhang", value: 0}
      ]
    },
    {
      "Post Count": [
        {name: "6x6x16", value: 0},
        {name: "6x6x18", value: 0},
        {name: "6x6x20", value: 0},
        {name: "6x6x22", value: 0},
        {name: "6x6x24", value: 0},
        {name: "6x8x20", value: 0},
        {name: "6x8x22", value: 0},
        {name: "6x8x24", value: 0}
      ]
    },
    {
      "Roof Pitch/Miles/Equipment": [
        {name: "Roof Pitch", value: 0},
        {name: "Miles From Shop", value: 0},
        {name: "Pieces of Equipment Needed", value: 0}
      ]
    },
    {
      "Truss and Purlin": [
        {name: "Truss Quote", value: 0},
        {name: "2x4 Edge Purlin Stiffener", value: 0}
      ]
    },
    {
      "Overhead Doors": [
        {name: "Door 1: Quantity", value: 0},
        {name: "Door 1: Width", value: 0},
        {name: "Door 1: Height", value: 0},
        {name: "Door 1: Cost (including install)", value: 0},
        {name: "Door 2: Quantity", value: 0},
        {name: "Door 2: Width", value: 0},
        {name: "Door 2: Height", value: 0},
        {name: "Door 2: Cost (including install)", value: 0},
        {name: "Door 3: Quantity", value: 0},
        {name: "Door 3: Width", value: 0},
        {name: "Door 3: Height", value: 0},
        {name: "Door 3: Cost (including install)", value: 0},
      ]
    },
    {
      "Man Doors and Windows": [
        {name: "Door 1: Quantity", value: 0},
        {name: "Door 1: Cost", value: 0},
        {name: "Door 2: Quantity", value: 0},
        {name: "Door 2: Cost", value: 0},
        {name: "Window 1: Quantity", value: 0},
        {name: "Window 1: Cost", value: 0},
        {name: "Window 2: Quantity", value: 0},
        {name: "Window 2: Cost", value: 0},
      ]
    },
    {
      "Labor": [
        {name: "Set up: Number of Guys", value: 0},
        {name: "Set up: Number of Days", value: 0},
        {name: "Post Set: Number of Guys", value: 0},
        {name: "Post Set: Number of Days", value: 0},
        {name: "Truss Frame: Number of Guys", value: 0},
        {name: "Truss Frame: Number of Days", value: 0},
        {name: "Roof: Number of Guys", value: 0},
        {name: "Roof: Number of Days", value: 0},
        {name: "Wall Frame: Number of Guys", value: 0},
        {name: "Wall Frame: Number of Days", value: 0},
        {name: "Wall Sheets: Number of Guys", value: 0},
        {name: "Wall Sheets: Number of Days", value: 0},
        {name: "Trim: Number of Guys", value: 0},
        {name: "Trim: Number of Days", value: 0},
        {name: "Clean Up: Number of Guys", value: 0},
        {name: "Clean Up: Number of Days", value: 0},
      ]
    }
  ])

  return (
    <div>
      <Navbar/>
      <BidFieldsRenderer 
        bid={bid}
        setBid={setBid}
      />
    </div>
  );
}

export default App;
