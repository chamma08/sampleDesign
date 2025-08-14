import FrequentlyQz from "./components/FrequentlyQz";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] "></div>
      <div className="overflow-hidden">
        <NavBar />
        <Hero />
        <Services />
        <FrequentlyQz />
      </div>
    </main>
  );
}

export default App;
