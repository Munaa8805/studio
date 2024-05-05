import Background from "./components/Background";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="hidden md:flex">
        <Background />
      </div>
    </>
  );
}

export default App;
