import { useState } from "react";
import reactLogo from "./assets/react.svg";

import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3 className="text-amber-600 text-3xl text-center">Wasan Hotels</h3>
      <Navbar />
    </>
  );
}

export default App;
