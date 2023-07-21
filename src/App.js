import './App.css';
import Language from './Language';
import { useState } from "react"

const App = () => {

  const [showKotlin, setShowKotlin] = useState(false);

  return (
    <div className="App">
      <h1>Demo</h1>
     {showKotlin ? <Language name="Java"/> : <Language name="Kotlin"/> }
     <button onClick={() => setShowKotlin(!showKotlin)}>Switch</button>
    </div>
  );
}

export default App;
