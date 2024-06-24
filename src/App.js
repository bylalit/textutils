import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="LalitKP" about="About Us " search="Search1"/>
      {/* <Navbar /> */}

    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below"/>
    </div>

    </>
  );
}

export default App;
