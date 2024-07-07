import "./App.css";
//import {Accordian} from "./components/accordian.jsx"
//import {RandomColor} from "./components/random-color-generator"
import { ScrollIndicator } from "./components/scroll-indicator/scroll-indicator.jsx";
function App() {
  return (
    <div>
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      <ScrollIndicator  url = {'https://dummyjson.com/products?limit=100'} />
    </div>
  );
}

export default App;
