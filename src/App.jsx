import './index.css'
import { LoadingScreen } from './components/LoadingScreen'
import { useState } from "react";
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} {" "}
      <div
        className={`min-h-screen w-full transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 
        />
        <MobileMenu 
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

      </div>
    </>
  )
}

export default App
