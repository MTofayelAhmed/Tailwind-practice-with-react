import "./App.css";
import Chart from "./Components/Chart/Chart";
import Navbar from "./Components/Navbar/Navbar";
import PhoneBar from "./Components/PhoneBar/PhoneBar";
import PriceList from "./Components/PriceList/PriceList";

function App() {
  return (
    <>
      <Navbar></Navbar>
     
      
      <PriceList></PriceList>
      <Chart></Chart>
      <PhoneBar></PhoneBar>
    </>
  );
}

export default App;
