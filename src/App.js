// import logo from './logo.svg';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Childe1 from './component/Childe1';
// import { increment } from './features/counterSlice';


function App() {
  const data = useSelector((c)=>{
    return (c.show.value)
  })
  const [first, setfirst] = useState(data)
  useEffect(() => {
    setfirst(data)
  }, [data])
  
  return (
    <div className="App">
      <h1>App {first}</h1>
    <Childe1 count={first}/>
    </div>
  );
}

export default App;
