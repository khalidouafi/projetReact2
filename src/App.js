//import logo from './logo.svg';
import './App.css';
import { Test } from './Test';
import images from './img1.jfif'
import { useState } from 'react';
import { Item } from './Item';
import { Home } from './Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount]=useState(0)
  const UpdateCounte=()=>{
    setCount(count+1)
  }
  const entrerClick=(name)=>{
  console.log(`salut ${name}`)
  }
  
  const name='MOUSTAPHA SARR';
  var region='DAKAR';
  const tel='775547971';
  return (
    <div div className="App"> 
   <Routes>
    <Route path='/' element={<Home/>}  />
   </Routes>
   
  
    
    
    </div>
    
    
    
    
    /*<div className="App">
      <Item/>
     <Test
     //names={name}
     region={region}
     tel={tel}
     names={'SAMBA'}
    image={images}
     >
      {images}
      
      </Test>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}> Compteur</button>
    <button onClick={UpdateCounte}>Compteur2</button>
    <button onClick={()=>entrerClick("IBRAHIMA")}>Cliquer</button>
    </div>*/
  );
}

export default App;
