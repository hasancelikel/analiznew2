import Drc from "./component/drc";
import Logo from "./component/logo";
import './app.css'
import Mettest from "./component/mettest";
import Analiz from "./component/CHEMICAL ANALISYS/analiz"
import End from "./component/CHEMICAL ANALISYS/end"
import { useLocation } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import React, {useRef} from 'react'




function App() {
 
  const location = useLocation();
  const inputValue = location.state?.inputValue;
  
  localStorage.getItem('inputValue');

  


  const componentRef = useRef();
  const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: 'emp-data',
     /* onAfterPrint: ()=> alert('ÇETİNKAYA METAL'),*/
     
  
    })
    

  return (
    
    
    <>
  
    <div ref={componentRef} style={{width:'1005px',height:'1153px', margin:'100px 100px'}} className="App">
  
  
  
      <Logo />
      <Drc />
      <Mettest inputValue={inputValue} 
     />
      <Analiz />
     
      <End />
     
    </div>

<button onClick={handlePrint}>YAZDIR</button>
    </>
 
    
   
  );
}

export default App;
