import Background from "./components/Background";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import ImagesWrapper from "./components/ImagesWrapper";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-[100vh]">
      <section className="w-full  md:absolute md:z-10 md:top-0 md:left-0 ">
        <Navbar />
      </section>
      <section className="hidden md:flex">
        <Background />
      </section>
      <section className="container mx-auto">
        <Feature />
        <ImagesWrapper />
      </section>
      <section className="w-full bg-black text-white">
        <Footer />
      </section>
    </div>
  );
}

export default App;
