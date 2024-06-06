import logo from './logo.svg';
import './App.css';

import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";
import accordian from "./components/accordian";


function App() {
  return (
    <div className="App">
      {/* <LightDarkMode/> */}
      {/* <QRCodeGenerator/> */}
      {/* <LoadMoreData/> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {<Accordian/>}

    </div>
  );
}

export default App;
