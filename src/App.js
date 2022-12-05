import "./App.css";
import "./fonts/fonts.css";
import Contact_Us from "./components/Hiden_Search/Contact_Us";
import Navbar from "./components/Navbar/Navbar";
import Advertisement_block from "./components/advertisement_block/advertisement_block";

const App = () => {
  return (
    <div className="App">
      <Contact_Us />
      <Navbar />
      <Advertisement_block />
    </div>
  );
};

export default App;
