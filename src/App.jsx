import './App.css'
import './index.css'
import { LoadingScreen } from './components/LoadingScreen'
import { useEffect, useState } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
    </>
  )
}

export default App
