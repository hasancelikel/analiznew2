import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import App from './App'
import HomepPage from './HomepPage';

function All() {
  
  return ( 
  
    <BrowserRouter> 
   
        <Routes>
   
          <Route path='/' element={<HomepPage />} />
          <Route path='/App' element={<App />} />
  
         
        </Routes>
   
   
  
   
    
      
      

      

    
    </BrowserRouter>

  );
}

export default All;