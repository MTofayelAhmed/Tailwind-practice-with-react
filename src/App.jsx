import "./App.css";
import Chart from "./Components/Chart/Chart";
import Navbar from "./Components/Navbar/Navbar";
import PriceList from "./Components/PriceList/PriceList";

function App() {
  return (
    <>
      <Navbar></Navbar>
     
      
      <PriceList></PriceList>
      <Chart></Chart>
    </>
  );
}

export default App;
