import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyse" />
      </div>

      {/* <div className="container my-3">
        <About heading="About Us" />
      </div> */}
    </>
  );
}

export default App;
